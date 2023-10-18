import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
import { MessengerService } from 'src/app/services/messenger.service';
import { AccountService } from 'src/app/services/account.service';
import { take } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalController } from '@ionic/angular';
import { RateModalComponent } from 'src/app/components/modals/share-rate-modals/rate-modal/rate-modal.component';
import { NotifierService } from 'angular-notifier';
import { DesignerService } from 'src/app/services/designer.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.page.html',
  styleUrls: ['./messenger.page.scss'],
})
export class MessengerPage implements OnInit {
  messages = [];
  message = '';
  attachments;
  attachmentPaths;
  searchText: any;
  pusher: Pusher;
  isLoading: boolean = false;
  err: string = '';
  loggedUser;
  contacts: any[];
  activeChatUser = {
    photoPath: '',
    id: null,
    firstName: '',
    lastName: '',
    chatPeriodExpired: true,
  };
  currentChannel: string;
  ratePrompt = false;

  constructor(
    private msgService: MessengerService,
    private accountService: AccountService,
    public datepipe: DatePipe,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService,
    private modalController: ModalController,
    private notifier: NotifierService,
    private designerService: DesignerService
  ) {}

  ngOnInit(): void {
    //Pusher.logToConsole = true; // remove after testing
    this.pusher = new Pusher('e705f2d3284882b4b53d', {
      cluster: 'eu',
    });

    this.msgService.getContacts().subscribe((res: any[]) => {
      this.contacts = res;
      this.accountService.currentUser$.pipe(take(1)).subscribe((user) => {
        this.loggedUser = user;
      });
      if (this.contacts.length > 0) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let contactId = parseInt(urlParams.get('contact'), 10);
        if (!contactId) {
          contactId = this.contacts[0].id;
          this.activeChatUser = this.contacts[0];
        } else {
          this.activeChatUser = this.contacts.find((u) => u.id === contactId);
        }
        this.connectToChannel(contactId);
      }
    });
  }

  checkShouldPromptRating() {
    this.designerService.isDesignerRated(this.activeChatUser.id).subscribe(
      (res: boolean) => {
        this.ratePrompt = !res && this.activeChatUser.chatPeriodExpired;
      },
      () => (this.ratePrompt = false)
    );
  }

  onFileChange(event) {
    if (event.target.files[0]) {
      this.attachments = event.target.files;
      this.attachmentPaths = Array.from(this.attachments).map((e: any) =>
        this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(e))
      );
    } else {
      this.attachments = null;
      this.attachmentPaths = null;
    }
  }

  connectToChannel(contactId) {
    this.checkShouldPromptRating();
    const channelName = this.generateChannelName(contactId);
    this.currentChannel = channelName;
    const channel = this.pusher.subscribe(channelName);
    this.msgService.getChatHistory(contactId).subscribe((history: any) => {
      this.messages = history;
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
      channel.bind('message', (data) => {
        this.messages.push(data);
        setTimeout(() => {
          this.scrollToBottom();
        }, 50);
      });
    });
  }

  generateChannelName(contactId) {
    const sortedIds = [contactId, this.loggedUser.id].sort((a, b) => a - b);
    return `chat_${sortedIds[0]}_${sortedIds[1]}`;
  }

  changeChat(contact) {
    this.messages = [];
    this.activeChatUser = contact;
    this.unsubscribeFromChannel(this.currentChannel);
    this.changeQueryParam(contact.id);
    this.connectToChannel(contact.id);
  }

  sendMsg(): void {
    if (this.message || (this.attachments && !this.isLoading)) {
      this.spinner.show();
      this.isLoading = true;
      const req = {
        recipientId: this.activeChatUser.id,
        content: this.message,
        attachments: this.attachments,
      };
      this.msgService.sendMessage(req).subscribe(
        (res) => {
          return this.msgService
            .getChatHistory(this.activeChatUser.id)
            .subscribe((messages: any) => {
              this.spinner.hide();
              this.messages = messages;

              this.isLoading = false;
              this.attachments = null;
              this.message = '';
            });
        },
        (err) => {
          this.spinner.hide();
          this.attachments = null;
          this.err = 'Error: Cannot upload file(s).';
          this.notifier.show({
            message: this.err,
            type: 'error',
          });
        }
      );
    }
  }

  downloadFile(file) {
    const sourceSplit = file.url.split('/upload/');
    const source = sourceSplit[0] + '/upload/fl_attachment/' + sourceSplit[1];
    const fileName = source.split('/').pop();
    const el = document.createElement('a');
    el.setAttribute('href', source);
    el.setAttribute('download', fileName);
    document.body.appendChild(el);
    el.click();
    el.remove();
  }

  parseDate(dateString) {
    const date = new Date(dateString);
    return this.datepipe.transform(date, 'MMM d YYYY');
  }

  getChatClassName(msg, rightClass, leftClass) {
    const senderId = msg.senderId ? msg.senderId : msg.SenderId;
    return senderId === this.loggedUser.id ? rightClass : leftClass;
  }

  unsubscribeFromChannel(channelName) {
    this.pusher.unsubscribe(channelName);
  }

  changeQueryParam(contact) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        contact,
      },
    });
  }

  async openRatingModal() {
    this.ratePrompt = false;
    const modal = await this.modalController.create({
      componentProps: { designer: this.activeChatUser },
      component: RateModalComponent,
      cssClass: 'auto-size-modal-css',
    });
    await modal.present();
  }

  scrollToBottom() {
    const element = document.getElementById('chatbox');
    element.scrollTop = element.scrollHeight;
  }
}
