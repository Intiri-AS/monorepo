import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-open-file-modal',
  templateUrl: './open-file-modal.component.html',
  styleUrls: ['./open-file-modal.component.scss'],
})
export class OpenFileModalComponent implements OnInit {

  file;

  constructor( private modalController: ModalController) { }

  ngOnInit() {}

  downloadFile() {
    const sourceSplit = this.file.url.split('/upload/');
    const source = sourceSplit[0] + '/upload/fl_attachment/' + sourceSplit[1];
    const fileName = source.split('/').pop();
    const el = document.createElement('a');
    el.setAttribute('href', source);
    el.setAttribute('download', fileName);
    document.body.appendChild(el);
    el.click();
    el.remove();
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
