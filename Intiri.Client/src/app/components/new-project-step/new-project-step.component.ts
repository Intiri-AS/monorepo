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
import { LanguageService } from 'src/app/services/language.service';
import { CommonUtilsService } from 'src/app/services/CommonUtils.service';
import { Project } from 'src/app/models/project.model';

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
  roomSketchImagePaths = [];

  mbFamilyAll: any[];
  mbsExpanded: boolean = false;

  expandText: boolean = false;

  colorPalettes$: Observable<any> = this.colorService.colorPalettes$
  colorPalettes: any = [];

  materials$: Observable<any> = this.materialService.materials$;
  materials: any = []
  materialTypes: any = [];
  materialProviders: Array<any> = [];

  products: any = [];
  productTypes: any = [];
  productProviders: Array<any> = [];


  showFilterDropdown: boolean = false;
  isCreateProjectPage: boolean = false;
  typeFilters: Array<string> = [];
  providerFilters: Array<string> = [];

  currentLanguage: string = '';

  constructor(
    private sanitizer: DomSanitizer,
    private modalController: ModalController,
    private projectService: ProjectService,
    private materialService: MaterialService,
    private partnerService: PartnerService,
    private colorService: ColorService,
    private productService: ProductService,
    private languageService: LanguageService,
    private router: Router,
    private commonUtilsService: CommonUtilsService,
  ) { }

  ngOnInit() {
    if (this.router.url.includes('edit-moodboard')) { //For Client-side moodboard edit
      this.showFilterDropdown = true;

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

      this.assignAllItemsData()
    } else {
      this.isCreateProjectPage = true;
    }
    this.languageService.languageChange$.subscribe(res => {
      this.currentLanguage = res;
    })
  }


  ngOnChanges () {
    this.showFilterDropdown && this.assignAllItemsData();

    this.typeFilters = [];
    this.providerFilters = [];

    // list providers for materials
    this.materialProviders = this.commonUtilsService.getUniqueElementsFromArray(this.materials.map(e => e.provider));

    // list providers for products
    this.productProviders = this.commonUtilsService.getUniqueElementsFromArray(this.products.map(e => e.partnerName))

    this.languageService.languageChange$.subscribe(res => {
      this.currentLanguage = res;
    })
  }

  assignAllItemsData () {
    // if (this.currentStepNo == 0) {
    //   this.currentStep.nonSelectedItems = this.colorPalettes.filter(colorPalette => !this.currentStep.data.map(e => e.id).includes(colorPalette.id));
    // } else if (this.currentStepNo == 1) {
    //   this.currentStep.nonSelectedItems = this.materials.filter(material => !this.currentStep.data.map(e => e.id).includes(material.id));
    // } else { // currentStepNo = 2
    //   this.currentStep.nonSelectedItems = this.products.filter(product => !this.currentStep.data.map(e => e.id).includes(product.id));
    // }
    // this.currentStep.data = this.currentStep.data.concat(this.currentStep.nonSelectedItems);

    // Show items based on filters
    this.currentStep.filteredResult = this.currentStep.data;
  }

  toggleItem(item) {
    this.toggleSelection.emit(item);
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
    if (event.target.files.length > 0) {
      this.project.roomDetails.imageFiles = event.target.files;
      this.project.roomDetails.roomSketchFiles = event.target.files;
      this.roomSketchImagePaths = Object.keys(event.target.files).map((key, i) =>
        this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(event.target.files[key])));
    } else {
      this.project.roomDetails.roomSketchFiles = {};
      this.roomSketchImagePaths = [];
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

  onMaterialTypeFilterChange (event) {
    this.typeFilters = event.detail.value;
    this.filterItems();
  }

  onMaterialProviderFilterChange (event) {
    this.providerFilters = event.detail.value;
    this.filterItems();
  }

  onProductTypeFilterChange (event) {
    this.typeFilters = event.detail.value;
    this.filterItems();
  }

  onProductProviderFilterChange (event) {
    this.providerFilters = event.detail.value;
    this.filterItems();
  }

  filterItems () {
    if (this.currentStepNo == 1) {
      if (this.typeFilters.length && this.providerFilters.length) {
        this.currentStep.filteredResult = this.currentStep.data.filter(data => this.typeFilters.includes(data.materialTypeId.toString()));
        this.currentStep.filteredResult = this.currentStep.filteredResult.filter(data => this.providerFilters.includes(data.provider));
      } else if (this.typeFilters.length  && !this.providerFilters.length) {
        this.currentStep.filteredResult = this.currentStep.data.filter(data => this.typeFilters.includes(data.materialTypeId.toString()));
      } else if (!this.typeFilters.length && this.providerFilters.length) {
        this.currentStep.filteredResult = this.currentStep.data.filter(data => this.providerFilters.includes(data.provider));
      } else {
        this.currentStep.filteredResult = this.currentStep.data;
      }
    } else if (this.currentStepNo == 2) {
      if (this.typeFilters.length && this.providerFilters.length) {
        this.currentStep.filteredResult = this.currentStep.data.filter(data => this.typeFilters.includes(data.productTypeId.toString()));
        this.currentStep.filteredResult = this.currentStep.filteredResult.filter(data => this.providerFilters.includes(data.partnerName));
      } else if (this.typeFilters.length && !this.providerFilters.length) {
        this.currentStep.filteredResult = this.currentStep.data.filter(data => this.typeFilters.includes(data.productTypeId.toString()));
      } else if (!this.typeFilters.length && this.providerFilters.length) {
        this.currentStep.filteredResult = this.currentStep.data.filter(data => this.providerFilters.includes(data.partnerName));
      } else {
        this.currentStep.filteredResult = this.currentStep.data;
      }
    }
  }

}
