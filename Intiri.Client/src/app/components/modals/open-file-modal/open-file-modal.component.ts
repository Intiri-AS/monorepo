import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-open-file-modal',
  templateUrl: './open-file-modal.component.html',
  styleUrls: ['./open-file-modal.component.scss'],
})
export class OpenFileModalComponent implements OnInit {

  file;
  canDelete;
  isRemoving = false;

  constructor( private modalController: ModalController, private projectService: ProjectService, private notifier: NotifierService,  private spinner: NgxSpinnerService) { }

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

  deleteFile() {
    this.spinner.show();
    this.projectService.deleteInspiration(this.file.id).subscribe(res => {
      this.projectService.getInspirations();
      this.spinner.hide();
      this.notifier.show({
        message: 'Inspiration file removed successfully.',
        type: 'success',
      });
      this.modalController.dismiss();
    }, () => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Cannot remove inspiration file.',
        type: 'error',
      });
    })
  }

}
