import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
import { MessengerService } from 'src/app/services/messenger.service';
import { AccountService } from 'src/app/services/account.service';
import { take } from 'rxjs/operators';
import { DatePipe } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.page.html',
  styleUrls: ['./messenger.page.scss'],
})
export class MessengerPage implements OnInit {

  username = 'vladk2';
  messages = [];
  message = '';
  pusher: Pusher;

  loggedUser;
  contacts: any[];
  activeChatUser = {photoPath: '', id: null, firstName: '', lastName: '', chatPeriodExpired: true};
  currentChannel: string;

  constructor(private msgService: MessengerService, private accountService: AccountService, public datepipe: DatePipe, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //Pusher.logToConsole = true; // remove after testing
    this.pusher = new Pusher('0233be6c2ef5fb26cc7d', {
      cluster: 'eu'
    });

    this.msgService.getContacts().subscribe((res: any[]) => {
      this.contacts = res;
      this.accountService.currentUser$.pipe(take(1)).subscribe((user) => {
        this.loggedUser = user;
      });

      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      let contactId = parseInt(urlParams.get('contact'), 10);
      if(!contactId) {
        contactId = this.contacts[0].id;
        this.activeChatUser = this.contacts[0];
      } else {
        this.activeChatUser = this.contacts.find(u => u.id === contactId);
      }
      this.connectToChannel(contactId);
    });

  }

  connectToChannel(contactId) {
    const channelName = this.generateChannelName(contactId);
    this.currentChannel = channelName;
    const channel = this.pusher.subscribe(channelName);
    this.msgService.getChatHistory(contactId).subscribe((history: any) => {
      this.messages = history;
      setTimeout(() => {this.scrollToBottom();}, 100);
      channel.bind('message', data => {
        this.messages.push(data);
        setTimeout(() => {this.scrollToBottom()}, 50);
      });
    })
  }

  generateChannelName(contactId) {
    const sortedIds = [contactId, this.loggedUser.id].sort((a,b) => a - b);
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
    if(this.message) {
      const req = { recipientId: this.activeChatUser.id, content: this.message}
      this.msgService.sendMessage(req).subscribe(res => {
        this.message = '';
      });
    }
  }

  parseDate(dateString) {
    const date = new Date(dateString);
    return this.datepipe.transform(date, 'MMM d');
  }

  getChatClassName(msg) {
    const senderId = msg.senderId ? msg.senderId : msg.SenderId;
    return senderId === this.loggedUser.id ? 'chat-right' : 'chat-left';
  }


  unsubscribeFromChannel(channelName) {
    this.pusher.unsubscribe(channelName);
  }

  changeQueryParam(contact){
    this.router.navigate([], {
     relativeTo: this.route,
     queryParams: {
       contact
     },
   });
  }

  scrollToBottom() {
    const element = document.getElementById('chatbox');
    element.scrollTop = element.scrollHeight;
  }

}
