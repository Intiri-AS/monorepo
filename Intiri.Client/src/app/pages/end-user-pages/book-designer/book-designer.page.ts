import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookDesignerModalComponent } from 'src/app/components/modals/book-designer-modal/book-designer-modal.component';
import { DesignerService } from 'src/app/services/designer.service';

@Component({
  selector: 'app-book-designer-page',
  templateUrl: './book-designer.page.html',
  styleUrls: ['./book-designer.page.scss'],
})

export class BookDesignerPage {

  designers = [];

  constructor(private designerService: DesignerService, private modalController: ModalController) {}

  ngOnInit() {
    this.designerService.getDesigners().subscribe((res: any[]) => {
      this.designers = res;
    });
  }

  async paymentModal(designer) {
    const modal = await this.modalController.create({
      component: BookDesignerModalComponent,
      componentProps: {designer},
      cssClass: 'book-designer-modal-css',
    });

    await modal.present();
  }
}
