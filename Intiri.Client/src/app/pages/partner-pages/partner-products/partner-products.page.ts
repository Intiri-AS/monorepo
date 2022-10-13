import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuPopoverComponent } from 'src/app/components/menu-popover/menu-popover.component';
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

  constructor(public popoverController: PopoverController, private partnerService: PartnerService) { }

  ngOnInit() {
    //TODO: change this to getProductsFromThatPartner
    this.partnerService.getProducts().subscribe((res: any[]) => {
      this.products = res;
    })

    this.partnerService.getProductsType().subscribe((res: any[]) => {
      this.productTypes = res;
    })
  }

  addProduct() {
    //TODO
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
}
