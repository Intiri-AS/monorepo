import { Component, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { NgxSpinnerService } from 'ngx-spinner';
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
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.projectService.getAllProjects().subscribe(res => {
      this.projects = res;
      this.isLoading = false;
      this.spinner.hide();
    });
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

  async openShare() {
    const modal = await this.modalController.create({
      component: ShareModalComponent,
    });

    await modal.present();
  }

}
