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

  languages = this.designerService.languages;

  designers = [];

  constructor(private designerService: DesignerService, private modalController: ModalController) {}

  ngOnInit() {
    this.designerService.getDesigners().subscribe((res: any[]) => {
      this.designers = res;
    });
  }

  getDesignerType(d) {
    const role = d.roles[0].name;
    if(role === 'InternalDesigner') {
      return 'Intiri Designer'
    } else if(role === 'ExternalDesigner') {
      return 'External Designer'
    }
    return role;
  }

  getMoodboardImage(d, index = null) {
    const style = d.createdMoodboards[0].style;
    if(index >= 0) {
      return style?.styleImages[index]?.imagePath;
    }
    return style?.imagePath;
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
