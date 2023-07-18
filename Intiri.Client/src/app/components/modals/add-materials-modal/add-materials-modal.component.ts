import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-add-materials-modal',
  templateUrl: './add-materials-modal.component.html',
  styleUrls: ['./add-materials-modal.component.scss'],
})
export class AddMaterialsModalComponent implements OnInit {
  public addMaterialForm: FormGroup;
  public editMaterialForm: FormGroup;
  public isFormSubmited = false;

  get nameErrors() {
    return this.addMaterialForm.controls.name.errors;
  }

  get typeErrors() {
    return this.addMaterialForm.controls.type.errors;
  }

  get descriptionErrors() {
    return this.addMaterialForm.controls.description.errors;
  }

  get imageFileErrors() {
    return this.addMaterialForm.controls.imageFile.errors;
  }

  get editNameErrors() {
    return this.editMaterialForm.controls.name.errors;
  }

  get editDescriptionErrors() {
    return this.editMaterialForm.controls.description.errors;
  }

  constructor(
    private modalController: ModalController,
    private materialService: MaterialService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private translate: TranslateService
  ) {
    this.addMaterialForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      imageFile: ['', [Validators.required]]
    });
    this.editMaterialForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: [''],
      description: ['', [Validators.required]],
      imageFile: ['']
    });
  }

  add: boolean;
  added: boolean;
  delete: boolean;
  edit: boolean;

  item: any;

  material = {
    name: '',
    materialTypeId: null,
    imageFiles: [],
    description: ''
  }

  imagePath = null;
  addMaterialImagePaths = [];

  materialTypes: any[];

  ngOnInit() {
    this.materialService.getMaterialTypes().subscribe((res: []) => {
      this.materialTypes = res;
    });
    if (this.edit) {
      const {id, imagePath, ...others } = this.item;
      this.material = others;
    }
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  onFileChangeAddMaterial (event) {
    if (Object.keys(event.target.files).length > 0) {
      this.material.imageFiles = event.target.files;
      this.addMaterialImagePaths = Object.keys(event.target.files).map((key, i) =>
        this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.material.imageFiles[key])));
    } else {
      this.addMaterialImagePaths = []
    }
  }

  onFileChange(event) {
    // if(event.target.files[0]) {
    //   this.material.imageFile = event.target.files[0];
    //   this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.material.imageFile));
    // } else {
    //   this.imagePath = null;
    // }
  }

  addMaterial() {
    this.spinner.show();
    this.isFormSubmited = true;
    if (!this.addMaterialForm.valid) {
      this.spinner.hide();
      return;
    }
    this.materialService.addMaterial(this.material).subscribe(res => {
      this.spinner.hide();
      if (typeof (res) === 'object') {
        this.materialService.getMaterials();
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

  deleteMaterial() {
    this.materialService.deleteMaterial(this.item['id']).subscribe(res => {
        this.materialService.getMaterials();
        this.modalController.dismiss();
        this.notifier.show({
          message: this.translate.instant('NOTIFY.material-deleted'),
          type: 'success',
        });
    }, e => {
      this.notifier.show({
        message: this.translate.instant('NOTIFY.error'),
        type: 'error',
      });
    });
  }

  editMaterial() {
    this.spinner.show();
    this.isFormSubmited = true;
    if (!this.editMaterialForm.valid) {
      this.spinner.hide();
      return;
    }
    this.materialService.editMaterial(this.item.id, this.material).subscribe(res => {
      this.spinner.hide();
      this.modalController.dismiss();
      if (typeof (res) === 'object') {
        this.materialService.getMaterials();
        this.notifier.show({
          message: this.translate.instant('NOTIFY.saved-deleted'),
          type: 'success'
        });
      }
    }, e => {
      this.spinner.hide();
      this.notifier.show({
        message: this.translate.instant('NOTIFY.error'),
        type: 'error',
      });
    })
  }

  async openSuccessModal() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddMaterialsModalComponent,
      componentProps: {added: true},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }

}
