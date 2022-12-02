import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-add-color-modal',
  templateUrl: './add-color-modal.component.html',
  styleUrls: ['./add-color-modal.component.scss'],
})
export class AddColorModalComponent implements OnInit {
  public addColorForm: FormGroup;
  public editColorForm: FormGroup;
  public isFormSubmited = false;

  get nameErrors() {
    return this.addColorForm.controls.name.errors;
  }

  get numberErrors() {
    return this.addColorForm.controls.number.errors;
  }

  get mainErrors() {
    return this.addColorForm.controls.main.errors;
  }

  get shadeOneErrors() {
    return this.addColorForm.controls.shadeOne.errors;
  }

  get shadeTwoErrors() {
    return this.addColorForm.controls.shadeTwo.errors;
  }

  get shadeThreeErrors() {
    return this.addColorForm.controls.shadeThree.errors;
  }

  get editNameErrors() {
    return this.editColorForm.controls.name.errors;
  }

  get editNumberErrors() {
    return this.editColorForm.controls.number.errors;
  }

  get editMainErrors() {
    return this.editColorForm.controls.main.errors;
  }

  get editShadeOneErrors() {
    return this.editColorForm.controls.shadeOne.errors;
  }

  get editShadeTwoErrors() {
    return this.editColorForm.controls.shadeTwo.errors;
  }

  get editShadeThreeErrors() {
    return this.editColorForm.controls.shadeThree.errors;
  }

  add: boolean;
  added: boolean;
  delete: boolean;
  edit: boolean;

  colorPallete = {
    name: '',
    number: null,
    mainColor: '',
    shadeColorLight: '',
    shadeColorMedium: '',
    shadeColorDark: ''
  }

  constructor(
    private modalController: ModalController,
    private colorService: ColorService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService
  ) {
    this.addColorForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      number: ['', [Validators.required]],
      main: ['', [Validators.required]],
      shadeOne: ['', [Validators.required]],
      shadeTwo: ['', [Validators.required]],
      shadeThree: ['', [Validators.required]]
    });
    this.editColorForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      number: ['', [Validators.required]],
      main: ['', [Validators.required]],
      shadeOne: ['', [Validators.required]],
      shadeTwo: ['', [Validators.required]],
      shadeThree: ['', [Validators.required]]
    });
  }

  item: any

  ngOnInit() {
    if (this.edit) {
      const {id, ...others } = this.item;
      this.colorPallete = others;
    }
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  addColor() {
    this.spinner.show();
    this.isFormSubmited = true;
    if (!this.addColorForm.valid) {
      this.spinner.hide();
      return;
    }
    this.colorService.addColorPalette(this.colorPallete).subscribe(res => {
      this.spinner.hide();
      if (typeof (res) === 'object') {
        this.colorService.getColorPalettes();
        this.openSuccessModal();
      }
    }, e => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error',
      });
    });
  }

  deleteColor() {
    this.colorService.deleteColorPalette(this.item.id).subscribe(res => {
        this.colorService.getColorPalettes();
        this.modalController.dismiss();
        this.notifier.show({
          message: 'Color deleted successfully',
          type: 'success',
        });
    }, e => {
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error',
      });
    });
  }

  editColor() {
    this.spinner.show();
    this.isFormSubmited = true;
    if (!this.editColorForm.valid) {
      this.spinner.hide();
      return;
    }
    this.colorService.editColorPalette(this.item.id, this.colorPallete).subscribe(res => {
      this.spinner.hide();
      this.modalController.dismiss();
      if (typeof (res) === 'object') {
        this.colorService.getColorPalettes();
        this.notifier.show({
          message: "Color changes saved successfully!",
          type: 'success'
        });
      }
    }, e => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error',
      });
    })
  }

  async openSuccessModal() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddColorModalComponent,
      componentProps: {added: true},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }
}
