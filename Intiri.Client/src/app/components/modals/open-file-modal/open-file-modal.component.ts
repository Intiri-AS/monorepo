import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-open-file-modal',
  templateUrl: './open-file-modal.component.html',
  styleUrls: ['./open-file-modal.component.scss'],
})
export class OpenFileModalComponent implements OnInit {
  @Input() file;
  @Input() canDelete;
  @Input() isRemoving = false;
  @Input() titleText;

  constructor(
    private modalController: ModalController,
    private projectService: ProjectService,
    private notifier: NotifierService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService
  ) {}

  ngOnInit() {}

  downloadFile() {
    let sourceSplit;
    if (this.file.url) {
      sourceSplit = this.file.url.split('/upload/');
    } else if (this.file.imagePath) {
      sourceSplit = this.file.imagePath.split('/upload/');
    }
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
    this.projectService.deleteInspiration(this.file.id).subscribe(
      (res) => {
        this.projectService.getInspirations();
        this.spinner.hide();
        this.notifier.show({
          message: this.translate.instant(
            'MY-INTIRI.remove-inspiration-message'
          ),
          type: 'success',
        });
        this.modalController.dismiss();
      },
      () => {
        this.spinner.hide();
        this.notifier.show({
          message: this.translate.instant(
            'MY-INTIRI.remove-inspiration-message-error'
          ),
          type: 'error',
        });
      }
    );
  }

  redirectToProviderLink() {
    if (this.file.link) {
      window.open(this.file.link, '_blank');
    } else if (this.file.productLink) {
      window.open(this.file.productLink, '_blank');
    }
  }
}
