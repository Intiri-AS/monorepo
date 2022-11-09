import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { OpenFileModalComponent } from '../modals/open-file-modal/open-file-modal.component';

@Component({
  selector: 'app-client-request',
  templateUrl: './client-request.component.html',
  styleUrls: ['./client-request.component.scss'],
})
export class ClientRequestComponent implements OnInit {

  @Input() client: any;
  @Input() includeClientDetails: boolean = false;
  screenWidth: any;

  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.client.clientInspirations = this.client.clientInspirations.map(e => {e.filename = e.url.substring(e.url.lastIndexOf('/')+1); return e;});
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
  }

  async openImageInModal(image) {
    const modal = await this.modalController.create({
      component: OpenFileModalComponent,
      componentProps: {file: image},
      cssClass: 'open-file-modal-css'
    });

    await modal.present();
  }

  goToChat() {
    this.router.navigateByUrl(`/messenger?contact=${this.client['clientId']}`)
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

  isExtension(file, extension) {
    return file?.filename.endsWith(extension);
  }
}
