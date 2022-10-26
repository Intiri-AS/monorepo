import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { MenuPopoverComponent } from 'src/app/components/menu-popover/menu-popover.component';
import { AddProductModalComponent } from 'src/app/components/modals/add-product-modal/add-product-modal.component';
import { PartnerService } from 'src/app/services/partner.service';


@Component({
  selector: 'app-partner-products-page',
  templateUrl: './partner-products.page.html',
  styleUrls: ['./partner-products.page.scss'],
})

export class PartnerProductsPage implements OnInit {

  products$: Observable<any> = this.partnerService.products$;
  products: any[];
  productTypes: any[];
  searchText: any;

  constructor(public popoverController: PopoverController, 
              private partnerService: PartnerService,
              private modalController: ModalController,) { }

  ngOnInit() {
    this.partnerService.getProductsFromThatPartner().subscribe();
    this.partnerService.getProductsType().subscribe((res: any[]) => {
      this.productTypes = res;
    })
    this.products$.subscribe( response => {
      this.products = response
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

  onFilterChange(event){
    const selectedTypeNames = event.detail.value;
    this.products$.pipe(take(1)).subscribe(products => {
      if(selectedTypeNames.length > 0) {
        this.products = products.filter(products => selectedTypeNames.includes(products.productType.name));  
        console.log(this.products, 'produkti')
      } else {
        this.products = products;
      }
    })
}

selectAllChange(){
  
  }
}
