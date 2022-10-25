import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.scss'],
})
export class AdminClientsComponent implements OnInit {

  users: any[];
  users$: Observable<any> = this.userService.users$;
  searchText: any;
  delete;

  item: {}

  constructor(private modalController: ModalController, public popoverController: PopoverController, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers();
    this.users$.pipe(take(1)).subscribe(users => { 
      this.users = users;
    });
  }

  async showSettings(e: Event, user) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {client: true, item: user},
      dismissOnSelect: true
    });

    await popover.present();
  }

  deleteClient() {
    this.userService.deleteUser(this.item['id']).subscribe(res => {
        this.userService.getUsers();
        this.modalController.dismiss();
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
