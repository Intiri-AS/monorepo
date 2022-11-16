import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { DesignerService } from 'src/app/services/designer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-designer-modal',
  templateUrl: './add-designer-modal.component.html',
  styleUrls: ['./add-designer-modal.component.scss'],
})
export class AddDesignerModalComponent implements OnInit {
  public addDesignerForm: FormGroup;
  public isFormSubmited = false;

  get firstNameErrors() {
    return this.addDesignerForm.controls.firstName.errors;
  }

  get lastNameErrors() {
    return this.addDesignerForm.controls.lastName.errors;
  }

  get codeErrors() {
    return this.addDesignerForm.controls.code.errors;
  }

  get phoneErrors() {
    return this.addDesignerForm.controls.phone.errors;
  }

  get roleErrors() {
    return this.addDesignerForm.controls.role.errors;
  }

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
    countryCode: '47',
    role: '',
    language: ''
  }

  constructor(
    private modalController: ModalController,
    private designerService: DesignerService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService
  ) {
    this.addDesignerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      code: ['', [Validators.required]],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])],
      role: ['', [Validators.required]],
      en: [''],
      no: ['']
    });
  }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  addDesigner() {
    this.spinner.show();
    this.isFormSubmited = true;
    if (!this.addDesignerForm.valid) {
      this.spinner.hide();
      return;
    }
    this.designer.language = (this.EN && this.NO) ? 'NO/EN' : this.EN ? 'EN' : this.NO ? 'NO' : '';
    this.designerService.addDesigner(this.designer).subscribe(res => {
      this.spinner.hide();
      if (typeof (res) === 'object') {
        this.designerService.getDesigners();
        this.openSuccessModal();
      }
    }, e => {
      this.spinner.hide();
      this.notifier.show({
        message: e.error,
        type: 'error',
      });
    });
  }

  deleteDesigner() {
    this.userService.deleteUser(this.item['id']).subscribe(res => {
        this.designerService.getDesigners();
        this.modalController.dismiss();
        location.reload();
        this.notifier.show({
          message: 'Designer deleted successfully',
          type: 'success',
        });
    }, e => {
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error',
      });
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
