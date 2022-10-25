import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { MenuPopoverComponent } from 'src/app/components/menu-popover/menu-popover.component';
import { AddProductModalComponent } from 'src/app/components/modals/add-product-modal/add-product-modal.component';
import { PartnerService } from 'src/app/services/partner.service';


@Component({
  selector: 'app-partner-products-page',
  templateUrl: './partner-products.page.html',
  styleUrls: ['./partner-products.page.scss'],
})

export class PartnerProductsPage implements OnInit {

  products: any[];
  productTypes: any[];
  searchText: any;

  constructor(public popoverController: PopoverController, 
              private partnerService: PartnerService,
              private modalController: ModalController,) { }

  ngOnInit() {
    //TODO: change this to getProductsFromThatPartner
    this.partnerService.getProducts().subscribe((res: any[]) => {
      this.products = res;
    })

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

  async openAddProductModal() {
    const popover = await this.popoverController.getTop();
        if (popover)
            await popover.dismiss(null);  
    const modal = await this.modalController.create({
      component: AddProductModalComponent,
      cssClass: 'product-modal-css'
    });

    await modal.present();
  }
}
