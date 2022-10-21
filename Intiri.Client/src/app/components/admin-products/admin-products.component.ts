import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
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


  constructor(public popoverController: PopoverController, private partnerService: PartnerService) { }

  ngOnInit() {
    this.partnerService.getProducts().subscribe((res: any[]) => {
      this.allProducts = res;
      this.products = res;
    })
    this.partnerService.getPartners();
    this.partnerService.getProductsType().subscribe((res: any[]) => {
      this.productTypes = res;
    })
  }

  async showSettings(e: Event) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {product: true},
      dismissOnSelect: true
    });

    await popover.present();
  }

  onPartnersFilterChange(event){
    const selectedPartnerNames = event.detail.value;
      if(selectedPartnerNames.length > 0) {
        this.products = this.allProducts.filter(product => selectedPartnerNames.includes(product.partner.name));  
      } else {
        this.products = this.allProducts;
      }
  }

  onProductTypeFilterChange(event){
    const selectedProductTypes = event.detail.value;
    console.log(selectedProductTypes)
      if(selectedProductTypes.length > 0) {
        this.products = this.allProducts.filter(product => selectedProductTypes.includes(product.productType.name));  
      } else {
        this.products = this.allProducts;
      }
  }

}
