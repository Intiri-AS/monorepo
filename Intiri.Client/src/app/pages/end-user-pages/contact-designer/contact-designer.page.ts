import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BookDesignerModalComponent } from 'src/app/components/modals/book-designer-modal/book-designer-modal.component';
import { DesignerService } from 'src/app/services/designer.service';

@Component({
  selector: 'app-contact-designer-page',
  templateUrl: './contact-designer.page.html',
  styleUrls: ['./contact-designer.page.scss'],
})

export class ContactDesignerPage {

  designers = []
  moodboard: any;

  constructor(
    private modalController: ModalController,
    private designerService: DesignerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.designerService.getDesigners().subscribe((res: any[]) => {
      this.designers = res;
    });
    this.route.data.subscribe(data => {
      this.moodboard = data.moodboard;
    })
  }


  async paymentModal(designer) {
    const modal = await this.modalController.create({
      component: BookDesignerModalComponent,
      componentProps: {designer, moodboard: this.moodboard},
      cssClass: 'book-designer-modal-css',
    });

    await modal.present();
  }

}
