import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
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
  public editDesignerForm: FormGroup;
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

  get editFirstNameErrors() {
    return this.editDesignerForm.controls.firstName.errors;
  }

  get editLastNameErrors() {
    return this.editDesignerForm.controls.lastName.errors;
  }

  get editCodeErrors() {
    return this.editDesignerForm.controls.code.errors;
  }

  get editPhoneErrors() {
    return this.editDesignerForm.controls.phone.errors;
  }

  get editRoleErrors() {
    return this.editDesignerForm.controls.role.errors;
  }

  add;
  added;
  delete;
  edit;

  item: any;

  EN: boolean = false;
  NO: boolean = false;

  designer = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    countryCode: '47',
    role: '',
    language: '',
  };

  constructor(
    private modalController: ModalController,
    private designerService: DesignerService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private translate: TranslateService
  ) {
    this.addDesignerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      code: ['', [Validators.required]],
      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]+$'),
        ]),
      ],
      role: ['', [Validators.required]],
      en: [''],
      no: [''],
    });
    this.editDesignerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      code: ['', [Validators.required]],
      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]+$'),
        ]),
      ],
      role: ['', [Validators.required]],
      en: [''],
      no: [''],
    });
  }

  ngOnInit() {
    if (this.edit) {
      this.designer.firstName = this.item.firstName;
      this.designer.lastName = this.item.lastName;
      this.designer.phoneNumber = this.item.phoneNumber;
      this.designer.countryCode = this.item.countryCode;
      this.designer.role = this.item.roles[0].name;
      this.designer.language = this.item.language;
      if (this.item.language === 'EN') {
        this.EN = true;
      }
      if (this.item.language === 'NO') {
        this.NO = true;
      }
      if (this.item.language === 'NO/EN') {
        this.EN = true;
        this.NO = true;
      }
    }
  }

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
    this.designer.language =
      this.EN && this.NO ? 'NO/EN' : this.EN ? 'EN' : this.NO ? 'NO' : '';
    this.designerService.addDesigner(this.designer).subscribe(
      (res) => {
        this.spinner.hide();
        if (typeof res === 'object') {
          this.designerService.getDesigners();
          this.openSuccessModal();
        }
      },
      (e) => {
        this.spinner.hide();
        this.notifier.show({
          message: e.error,
          type: 'error',
        });
      }
    );
  }

  deleteDesigner() {
    this.userService.deleteUser(this.item['id']).subscribe(
      (res) => {
        this.designerService.getDesigners();
        this.modalController.dismiss();
        this.notifier.show({
          message: this.translate.instant('NOTIFY.designer-deleted'),
          type: 'success',
        });
      },
      (e) => {
        this.notifier.show({
          message: this.translate.instant('NOTIFY.error'),
          type: 'error',
        });
      }
    );
  }

  editDesigner() {
    this.spinner.show();
    this.isFormSubmited = true;
    if (!this.editDesignerForm.valid) {
      this.spinner.hide();
      return;
    }
    this.designer.language =
      this.EN && this.NO ? 'NO/EN' : this.EN ? 'EN' : this.NO ? 'NO' : '';
    this.designerService.editDesigner(this.item.id, this.designer).subscribe(
      (res) => {
        this.spinner.hide();
        this.modalController.dismiss();
        if (typeof res === 'object') {
          this.designerService.getDesigners();
          this.notifier.show({
            message: this.translate.instant('NOTIFY.designer-updated'),
            type: 'success',
          });
        }
      },
      (e) => {
        this.spinner.hide();
        this.notifier.show({
          message: e.error,
          type: 'error',
        });
      }
    );
  }

  async openSuccessModal() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddDesignerModalComponent,
      componentProps: { added: true },
      cssClass: 'added-designer-modal-css',
    });

    await modal.present();
  }
}
