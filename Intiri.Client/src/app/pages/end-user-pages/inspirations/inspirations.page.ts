import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { OpenFileModalComponent } from 'src/app/components/modals/open-file-modal/open-file-modal.component';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-inspirations-page',
  templateUrl: './inspirations.page.html',
  styleUrls: ['./inspirations.page.scss'],
})

export class InspirationsPage {

  inspirations: any[] = [];
  imagePath = null;
  newInspiration = null

  constructor(
    public projectService: ProjectService,
    private spinner: NgxSpinnerService,
    private sanitizer: DomSanitizer,
    private notifier: NotifierService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.projectService.getInspirations().subscribe((res: any[]) => {
      this.spinner.hide();
      this.inspirations = res;
    })
  }

  addInspiration() {
    this.projectService.addInspiration(this.newInspiration).subscribe((res: any[]) => {
      this.projectService.getInspirations().subscribe((res: any[]) => {
        this.spinner.hide();
        this.inspirations = res;
        this.imagePath = null;
        this.notifier.show({
          message: 'New inspiration image added successfully',
          type: 'success',
        });
      })
    }, () => {
      this.spinner.hide();
      this.imagePath = null;
      this.notifier.show({
        message: 'Cannot upload this file',
        type: 'error',
      });
    })
  }

  async openImageInModal(image) {
    const modal = await this.modalController.create({
      component: OpenFileModalComponent,
      componentProps: {file: image},
      cssClass: 'open-file-modal-css'
    });

    await modal.present();
  }

  onFileChange(event) {
    if(event.target.files[0]) {
      this.newInspiration = event.target.files[0];
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.newInspiration));
      this.spinner.show();
      this.addInspiration();
    } else {
      this.imagePath = null;
    }
  }


}
