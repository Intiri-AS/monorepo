import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DesignerService } from 'src/app/services/designer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-designer-modal',
  templateUrl: './add-designer-modal.component.html',
  styleUrls: ['./add-designer-modal.component.scss'],
})
export class AddDesignerModalComponent implements OnInit {

  add;
  added;
  delete;

  item: {}

  EN: boolean = false;
  NO: boolean = false;

  designer = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    countryCode: '',
    role: '',
    language: ''
  }

  constructor(private modalController: ModalController, private designerService: DesignerService, private userService: UserService) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  addDesigner() {
    this.designer.language = (this.EN && this.NO) ? 'NO/EN' : this.EN ? 'EN' : this.NO ? 'NO' : '';
    this.designerService.addDesigner(this.designer).subscribe(res => {
      if (typeof (res) === 'object') {
        this.designerService.getDesigners();
        this.openSuccessModal();
        location.reload();
      }
    });
  }

  deleteDesigner() {
    this.userService.deleteUser(this.item['id']).subscribe(res => {
        this.designerService.getDesigners();
        this.modalController.dismiss();
        location.reload();
    });
  }

  async openSuccessModal() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddDesignerModalComponent,
      componentProps: {added: true},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }

}
