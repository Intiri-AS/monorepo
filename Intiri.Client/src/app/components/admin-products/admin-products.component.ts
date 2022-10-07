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

  products: any[];
  productTypes: any[];

  constructor(public popoverController: PopoverController, private partnerService: PartnerService) { }

  ngOnInit() {
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

}
