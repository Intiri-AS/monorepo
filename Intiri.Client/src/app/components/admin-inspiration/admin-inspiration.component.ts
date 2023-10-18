import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { OpenFileModalComponent } from '../modals/open-file-modal/open-file-modal.component';

@Component({
  selector: 'app-admin-inspiration',
  templateUrl: './admin-inspiration.component.html',
  styleUrls: ['./admin-inspiration.component.scss'],
})
export class AdminInspirationComponent implements OnInit {
  searchText: any;
  inspirations: any[];

  constructor(
    private commonService: CommonService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.commonService.getAllInspirations().subscribe((res: any[]) => {
      this.inspirations = res.map((e) => {
        e.filename = e.url.substring(e.url.lastIndexOf('/') + 1);
        return e;
      });
    });
  }

  async openImageInModal(image) {
    const modal = await this.modalController.create({
      component: OpenFileModalComponent,
      componentProps: { file: image, canDelete: false },
      cssClass: 'open-file-modal-css',
    });

    await modal.present();
  }

  isExtension(file, extension) {
    return file.filename.endsWith(extension);
  }

  downloadFile(file) {
    const sourceSplit = file.url.split('/upload/');
    const source = sourceSplit[0] + '/upload/fl_attachment/' + sourceSplit[1];
    const fileName = source.split('/').pop();
    const el = document.createElement('a');
    el.setAttribute('href', source);
    el.setAttribute('download', fileName);
    document.body.appendChild(el);
    el.click();
    el.remove();
  }
}
