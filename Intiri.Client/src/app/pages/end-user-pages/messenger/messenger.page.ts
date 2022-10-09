import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
import { MessengerService } from 'src/app/services/messenger.service';

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


  constructor(private msgService: MessengerService) { }

  ngOnInit(): void {
    Pusher.logToConsole = true; // remove after testing

    this.pusher = new Pusher('0233be6c2ef5fb26cc7d', {
      cluster: 'eu'
    });

    const channel = this.pusher.subscribe('chat');
    channel.bind('message', data => {
      this.messages.push(data);
      setTimeout(() => {this.scrollToBottom(), 100});
    });
  }

  sendMsg(): void {
    if(this.message) {
      const req = { username: this.username, message: this.message}
      this.msgService.sendMessage(req).subscribe(res => {
        this.message = '';
      });
    }
  }

  unsubscribeFromChannel() {
    this.pusher.unsubscribe('chat');
  }

  scrollToBottom() {
    const element = document.getElementById('chatbox');
    element.scrollTop = element.scrollHeight;
}

}
