import { Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonSlides, ModalController } from '@ionic/angular';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { OpenFileModalComponent } from 'src/app/components/modals/open-file-modal/open-file-modal.component';
import { ShareModalComponent } from 'src/app/components/modals/share-rate-modals/share-modal/share-modal.component';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-intiri-page',
  templateUrl: './my-intiri.page.html',
  styleUrls: ['./my-intiri.page.scss'],
})

export class MyIntiriPage {
  @ViewChild('slides') slides: IonSlides;
  @ViewChild('projectSlides') projectSlides: IonSlides;
  apiUrl = environment.apiUrl;

  projects: Project[] = [];
  projectId = 0;
  inspirations: any[] = [];
  imagePath = null;
  newInspiration = null

  options = {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  }
  searchText: any;
  isLoading = true;

  constructor(
    public projectService: ProjectService,
    private modalController: ModalController,
    private spinner: NgxSpinnerService,
    private sanitizer: DomSanitizer,
    private notifier: NotifierService
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
      this.inspirations = res;
    })
  }

  addInspiration() {
    this.projectService.addInspiration(this.newInspiration).subscribe((res: any[]) => {
      this.projectService.getInspirations();
      this.projectService.inspirations$.subscribe((res: any[]) => {
        this.spinner.hide();
        this.inspirations = res;
        this.notifier.show({
          message: 'New inspiration image added successfully',
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

  normalizeSlashes(string): string {
    return string.replaceAll("\\", "/")
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  nextProject() {
    this.projectSlides.slideNext();
  }

  prevProject() {
    this.projectSlides.slidePrev();
  }

  // goToProjectDetails(project: Project){
  //   this.projectService.setCurrentProject(project);
  //   this.router.navigateByUrl('/project-details');
  // }

  async openImageInModal(image) {
    const modal = await this.modalController.create({
      component: OpenFileModalComponent,
      componentProps: {file: image},
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

}
