import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { ColorService } from 'src/app/services/color.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-color-modal',
  templateUrl: './add-color-modal.component.html',
  styleUrls: ['./add-color-modal.component.scss'],
})
export class AddColorModalComponent implements OnInit {
  public addColorForm: FormGroup;
  public editColorForm: FormGroup;
  public isFormSubmited = false;
  colorNCS$: Observable<any> = this.colorService.colorNCS$;

  mainColorSrc;
  shadeColorLightSrc;
  shadeColorMediumSrc;
  shadeColorDarkSrc;
  colorNCSArr = [];

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
    shadeColorDark: '',
  };

  constructor(
    private modalController: ModalController,
    private colorService: ColorService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private translate: TranslateService
  ) {
    this.addColorForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      number: ['', [Validators.required]],
      main: ['', [Validators.required]],
      shadeOne: ['', [Validators.required]],
      shadeTwo: ['', [Validators.required]],
      shadeThree: ['', [Validators.required]],
    });
    this.editColorForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      number: ['', [Validators.required]],
      main: ['', [Validators.required]],
      shadeOne: ['', [Validators.required]],
      shadeTwo: ['', [Validators.required]],
      shadeThree: ['', [Validators.required]],
    });
  }

  item: any;

  ngOnInit() {
    this.colorService.getNCSColors();
    this.colorService.colorNCS$.subscribe(
      (countries) => (this.colorNCSArr = countries)
    );

    if (this.edit) {
      const { id, ...others } = this.item;
      setTimeout(() => {
        this.colorPallete = others;
        this.refreshColorPalletes();
      }, 1000); //5s
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
    this.colorService.addColorPalette(this.colorPallete).subscribe(
      (res) => {
        this.spinner.hide();
        if (typeof res === 'object') {
          this.colorService.getColorPalettes();
          this.openSuccessModal();
        }
      },
      (e) => {
        this.spinner.hide();
        this.notifier.show({
          message: this.translate.instant('NOTIFY.error'),
          type: 'error',
        });
      }
    );
  }

  deleteColor() {
    this.colorService.deleteColorPalette(this.item.id).subscribe(
      (res) => {
        this.colorService.getColorPalettes();
        this.modalController.dismiss();
        this.notifier.show({
          message: this.translate.instant('NOTIFY.color-deleted'),
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

  editColor() {
    this.spinner.show();
    this.isFormSubmited = true;
    if (!this.editColorForm.valid) {
      this.spinner.hide();
      return;
    }
    this.colorService
      .editColorPalette(this.item.id, this.colorPallete)
      .subscribe(
        (res) => {
          this.spinner.hide();
          this.modalController.dismiss();
          if (typeof res === 'object') {
            this.colorService.getColorPalettes();
            this.notifier.show({
              message: this.translate.instant('NOTIFY.color-saved'),
              type: 'success',
            });
          }
        },
        (e) => {
          this.spinner.hide();
          this.notifier.show({
            message: this.translate.instant('NOTIFY.error'),
            type: 'error',
          });
        }
      );
  }

  async openSuccessModal() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddColorModalComponent,
      componentProps: { added: true },
      cssClass: 'added-designer-modal-css',
    });

    await modal.present();
  }

  refreshColorPalletes() {
    this.updateColorPalleteMain();
    this.updateColorPalleteLight();
    this.updateColorPalleteMedium();
    this.updateColorPalleteDark();
  }

  updateColorPalleteMain() {
    let colorId = this.colorPallete.mainColor;
    if (colorId) {
      var obj = this.colorNCSArr.filter(function (node) {
        return node.id == colorId;
      });
      if (obj && obj.length > 0) {
        this.mainColorSrc = obj[0]['imagePath'];
      }
    }
  }

  updateColorPalleteLight() {
    let colorId = this.colorPallete.shadeColorLight;
    if (colorId) {
      var obj = this.colorNCSArr.filter(function (node) {
        return node.id == colorId;
      });
      if (obj && obj.length > 0) {
        this.shadeColorLightSrc = obj[0]['imagePath'];
      }
    }
  }

  updateColorPalleteMedium() {
    let colorId = this.colorPallete.shadeColorMedium;
    if (colorId) {
      var obj = this.colorNCSArr.filter(function (node) {
        return node.id == colorId;
      });
      if (obj && obj.length > 0) {
        this.shadeColorMediumSrc = obj[0]['imagePath'];
      }
    }
  }

  updateColorPalleteDark() {
    let colorId = this.colorPallete.shadeColorDark;
    if (colorId) {
      var obj = this.colorNCSArr.filter(function (node) {
        return node.id == colorId;
      });
      if (obj && obj.length > 0) {
        this.shadeColorDarkSrc = obj[0]['imagePath'];
      }
    }
  }
}
