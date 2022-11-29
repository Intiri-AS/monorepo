import { Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { OpenFileModalComponent } from 'src/app/components/modals/open-file-modal/open-file-modal.component';
import { ShareModalComponent } from 'src/app/components/modals/share-rate-modals/share-modal/share-modal.component';
import { Moodboard } from 'src/app/models/moodboard.model';
import { Project } from 'src/app/models/project.model';
import { MoodboardService } from 'src/app/services/moodboard.service';
import { ProjectService } from 'src/app/services/project.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-intiri-page',
  templateUrl: './my-intiri.page.html',
  styleUrls: ['./my-intiri.page.scss'],
})

export class MyIntiriPage {
  apiUrl = environment.apiUrl;

  projects: Project[] = [];
  offers: Moodboard[] = [];
  projectId = 0;
  inspirations: any[] = [];
  imagePath = null;
  newInspiration = null

  searchText: any;
  isLoading = true;
  isLoadingOffers = true;

  constructor(
    private projectService: ProjectService,
    private moodboardService: MoodboardService,
    private modalController: ModalController,
    private spinner: NgxSpinnerService,
    private sanitizer: DomSanitizer,
    private notifier: NotifierService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.projectService.getAllProjects().subscribe(res => {
      this.projects = res;
      this.isLoading = false;
      this.spinner.hide();
    });
    this.projectService.getInspirations();
    this.projectService.inspirations$.subscribe((res: any[]) => {
      this.inspirations = res.map(e => {e.filename = e.url.substring(e.url.lastIndexOf('/')+1); return e;});
    })
    this.moodboardService.getMoodboardOffers().subscribe(res => {
      this.offers = res;
      this.isLoadingOffers = false;
    })
  }

  addInspiration() {
    this.projectService.addInspiration(this.newInspiration).subscribe((res: any[]) => {
      this.projectService.getInspirations();
      this.projectService.inspirations$.subscribe((res: any[]) => {
        this.spinner.hide();
        this.inspirations = res;
        this.notifier.show({
          message: this.translate.instant('MY-INTIRI.add-inspiration-message'),
          type: 'success',
        });
      })
    })
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

  // TODO: needs to be updated after project is allowed to have multiple moodboards!
  getPiecesNo(project){
    let result = 0;
    project.projectMoodboards.forEach(moodboard => {
      result += moodboard.colorPalettes.length + moodboard.materials.length + moodboard.products.length;
    });
    return result;
  }

  getMbPiecesNo(moodboard){
    let result = 0;
      result += moodboard.colorPalettes.length + moodboard.materials.length + moodboard.products.length;
    return result;
  }

  normalizeSlashes(string): string {
    return string.replaceAll("\\", "/")
  }

  // goToProjectDetails(project: Project){
  //   this.projectService.setCurrentProject(project);
  //   this.router.navigateByUrl('/project-details');
  // }

  async openImageInModal(image) {
    const modal = await this.modalController.create({
      component: OpenFileModalComponent,
      componentProps: {file: image, canDelete: true},
      cssClass: 'open-file-modal-css'
    });

    await modal.present();
  }

  async openShare() {
    const modal = await this.modalController.create({
      component: ShareModalComponent,
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
