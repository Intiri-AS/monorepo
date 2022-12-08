import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { PartnerService } from 'src/app/services/partner.service';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {

  allProducts: any[];
  products: any[];
  productTypes: any[];
  searchText: any;
  partners$ = this.partnerService.partners$;
  products$: Observable<any> = this.partnerService.products$;

  private selectedPartnerNames: any[] = [];
  private selectedProductTypes: any[] = [];


  constructor(public popoverController: PopoverController, private partnerService: PartnerService) { }

  ngOnInit() {
    this.partnerService.getProductsFromThatPartner();
    this.products$.subscribe(product => {
      this.allProducts = product;
      this.products = product;
    })
    this.partnerService.getPartners();
    this.partnerService.getProductsType().subscribe((res: any[]) => {
      this.productTypes = res;
    })
  }

  async showSettings(e: Event, product) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {product: true, item: product},
      dismissOnSelect: true
    });

    await popover.present();
  }

  onPartnersFilterChange(event){
    this.selectedPartnerNames = event.detail.value;
    if (this.selectedProductTypes.length > 0 && this.selectedPartnerNames.length > 0) {
      this.products = this.allProducts.filter(product => this.selectedPartnerNames.includes(product.partnerId));
      this.products = this.products.filter(product => this.selectedProductTypes.includes(product.productTypeId));
    } else if (this.selectedPartnerNames.length > 0 && this.selectedProductTypes.length == 0) {
      this.products = this.allProducts.filter(product => this.selectedPartnerNames.includes(product.partnerId));
    } else if (this.selectedPartnerNames.length == 0 && this.selectedProductTypes.length > 0) {
      this.products = this.allProducts.filter(product => this.selectedProductTypes.includes(product.productTypeId));
    } else {
      this.products = this.allProducts;
    }
  }

  onProductTypeFilterChange(event){
    this.selectedProductTypes = event.detail.value;
    if (this.selectedProductTypes.length > 0 && this.selectedPartnerNames.length > 0) {
      this.products = this.allProducts.filter(product => this.selectedPartnerNames.includes(product.partnerId));
      this.products = this.products.filter(product => this.selectedProductTypes.includes(product.productTypeId));
    } else if (this.selectedProductTypes.length > 0 && this.selectedPartnerNames.length == 0) {
      this.products = this.allProducts.filter(product => this.selectedProductTypes.includes(product.productTypeId));
    } else if (this.selectedProductTypes.length == 0 && this.selectedPartnerNames.length > 0) {
      this.products = this.allProducts.filter(product => this.selectedPartnerNames.includes(product.partnerId));
    } else {
      this.products = this.allProducts;
    }
  }

}
