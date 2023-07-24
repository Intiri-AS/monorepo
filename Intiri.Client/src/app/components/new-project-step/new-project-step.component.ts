import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { ProjectService } from 'src/app/services/project.service';
import { environment } from 'src/environments/environment';
import { OpenFileModalComponent } from '../modals/open-file-modal/open-file-modal.component';
import { MaterialService } from 'src/app/services/material.service';
import { PartnerService } from 'src/app/services/partner.service'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ColorService } from 'src/app/services/color.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-project-step',
  templateUrl: './new-project-step.component.html',
  styleUrls: ['./new-project-step.component.scss'],
})
export class NewProjectStepComponent implements OnInit {

  apiUrl = environment.apiUrl;
  @Input() currentStep: any;
  @Input() project: any;
  @Input() currentStepNo: number;
  @Input() stepsOrder: object;
  @Output() toggleSelection = new EventEmitter<object>();

  imagePath = null;
  mbFamilyAll: any[];
  mbsExpanded: boolean = false;

  expandText: boolean = false;

  colorPalettes$: Observable<any> = this.colorService.colorPalettes$
  colorPalettes: any = [];

  materials$: Observable<any> = this.materialService.materials$;
  materials: any = []
  materialTypes: any = [];

  products: any = [];
  productTypes: any = [];


  showFilterDropdown: boolean = false;
  filteredData: Array<any>;

  constructor(
    private sanitizer: DomSanitizer,
    private modalController: ModalController,
    private projectService: ProjectService,
    private materialService: MaterialService,
    private partnerService: PartnerService,
    private colorService: ColorService,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.router.url.includes('edit-moodboard')) { //For Client-side moodboard edit
      this.showFilterDropdown = true;

      // Fetch color pallets
      this.colorService.getColorPalettes();
      this.colorPalettes$.subscribe(res => { this.colorPalettes = res });

      // Fetch materials
      this.materialService.getMaterials();
      this.materials$.subscribe(res => { this.materials = res });
      this.materialService.getMaterialTypes().subscribe(res => {
        this.materialTypes = res;
      })

      // Fetch products
      this.productService.getProducts().subscribe(res => { this.products = res })
      this.partnerService.getProductsType().subscribe(res => {
        this.productTypes = res;
      })
    }
  }

  ngOnChanges () {
    console.log(this.currentStep, this.currentStepNo)

    if (this.showFilterDropdown && (this.currentStepNo == 1 || this.currentStepNo == 2)) {
      this.filteredData = this.currentStep.data;
    }
  }

  toggleItem(item) {
    this.toggleSelection.emit(item);
  }

  toggleRoomSketch(item) {
    this.toggleSelection.emit(item);
    this.imagePath = null;
    this.project.roomDetails.imageFile = null;
  }

  seeMoreLess(state) {
    this.expandText = state;
  }

  getMbFamily(mb) {
    this.mbsExpanded = false;
    this.projectService.getMbFamily(mb.style.id, mb.room.id).subscribe((res: any[]) => {
      this.mbFamilyAll = res;
      this.currentStep.data.moodboardFamily = res.slice(-3);
    })
  }

  expandMbs() {
    this.currentStep.data.moodboardFamily = [...this.mbFamilyAll]
    this.mbsExpanded = true;
  }

  isArray(item) {
    return Array.isArray(item);
  }

  normalizeSlashes(string): string {
    return string.replaceAll("\\", "/")
  }

  onFileChange(event) {
    if(event.target.files[0]) {
      this.project.roomDetails.imageFile = event.target.files[0];
      this.project.roomDetails.shape = {shape: "", imagePath: ""};
      this.project.roomDetails.roomSketchFile = event.target.files[0];
      event.srcElement.value = "";
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.project.roomDetails.imageFile));
    } else {
      this.imagePath = null;
    }
  }

  isItemSelected(item): boolean {
    const stepName = this.stepsOrder[this.currentStepNo];
    // check if it's multi-select
    if(Array.isArray(this.project[stepName])) {
      if(this.project[stepName].some(e => e.id === item.id)) {
        return true;
      }
    } else { // else it's a single select
       // if it's updating sub-object
       if(stepName.includes('.')) {
        return JSON.stringify(this.project[stepName.split('.')[0]][stepName.split('.')[1]]) === JSON.stringify(item)
       }
       else {
        return this.project[stepName]?.id === item.id
       }
    }
    return false;
  }

  async openImageInModal(item, image) {
    this.toggleSelection.emit(item);
    const modal = await this.modalController.create({
      component: OpenFileModalComponent,
      componentProps: {file: image, canDelete: false},
      cssClass: 'open-file-modal-css'
    });

    await modal.present();
  }

  onMaterialFilterChange (event) {
    console.log(event.detail.value);
    let filters = event.detail.value;

    if (filters.length) {
        this.filteredData = this.currentStep.data.filter(e => {
          return filters.includes(e.materialTypeId.toString())
        })
    } else {
      this.filteredData = this.currentStep.data;
    }
    console.log("filteredData", this.filteredData)
  }

  onProductFilterChange (event) {
    console.log(event.detail.value)
  }

}
