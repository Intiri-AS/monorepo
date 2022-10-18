import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BookDesignerModalComponent } from 'src/app/components/modals/book-designer-modal/book-designer-modal.component';
import { DesignerService } from 'src/app/services/designer.service';

@Component({
  selector: 'app-designer-profile-page',
  templateUrl: './designer-profile.page.html',
  styleUrls: ['./designer-profile.page.scss'],
})

export class DesignerProfilePage {

  languages = this.designerService.languages;

  designer;

  constructor(
    private modalController: ModalController,
    private route: ActivatedRoute,
    private designerService: DesignerService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.designer = data.designer;
    })
  }

  getDesignerType() {
    const role = this.designer.roles[0].name;
    if(role === 'InternalDesigner') {
      return 'Intiri Designer'
    } else if(role === 'ExternalDesigner') {
      return 'External Designer'
    }
    return role;
  }

  normalizeSlashes(string): string {
    return string.replaceAll("\\", "/")
  }

  getMoodboardImage(mb, index = null) {
    const style = mb.style;
    if(index >= 0) {
      return style?.styleImages[index]?.imagePath;
    }
    return style?.imagePath;
  }

  // TODO: needs to be updated after project is allowed to have multiple moodboards!
  getPiecesNo(moodboard){
    let result = 0;
    result += moodboard.colorPalettes.length + moodboard.materials.length + moodboard.products.length;
    return result;
  }

  async bookConsultationModal() {
    const modal = await this.modalController.create({
      component: BookDesignerModalComponent,
      componentProps: {designer: this.designer},
      cssClass: 'book-designer-modal-css',
    });

    await modal.present();
  }

}
