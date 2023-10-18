import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  moodboard: any;
  isContactDesigner: boolean = false;

  constructor(
    private designerService: DesignerService,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.designerService.getDesignersNew().subscribe((res: any[]) => {
      this.designers = res;
    });
    this.route.data.subscribe((data) => {
      this.moodboard = data.moodboard;
      if (data.moodboard) {
        this.isContactDesigner = true;
      }
    });
  }

  getDesignerType(d) {
    const role = d.roles[0].name;
    if (role === 'InternalDesigner') {
      return 'Intiri Designer';
    } else if (role === 'ExternalDesigner') {
      return 'External Designer';
    }
    return role;
  }

  getMoodboardImage(d, index = null) {
    if (d.createdMoodboards.length > 0) {
      const style = d.createdMoodboards[0].style;
      if (!index) {
        return style?.imagePath;
      } else {
        return style?.styleImages[index]?.imagePath;
      }
    }
    return false;
  }

  async paymentModal(designer) {
    const modal = await this.modalController.create({
      component: BookDesignerModalComponent,
      componentProps: {
        designer,
        moodboard: this.isContactDesigner ? this.moodboard : null,
      },
      cssClass: 'book-designer-modal-css',
    });

    await modal.present();
  }

  getFeaturedPortfolios(id): Array<any> {
    const designer = this.designers.filter((d) => d.id === id)[0];
    const featuredPortfolios: Array<any> = designer.designerPortfolio.filter(
      (d) => d.featured === 1
    );
    return featuredPortfolios;
  }
}
