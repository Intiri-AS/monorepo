import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { LogoutModalComponent } from '../modals/logout-modal/logout-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private modalController: ModalController, private projectService: ProjectService) {}

  menuOpened() {
    // const x = document.querySelector('#home');
    // x['style'].overflow = 'hidden'
    // x['style'].height = '100vh'
  }
  menuClosed() {
    // const x = document.querySelector('#home');
    // x['style'].height = 'auto'
  }
  removeProjectDraft(){
    this.projectService.setCurrentProject(new Project());
  }

  async openLogoutModal() {
    const modal = await this.modalController.create({
      component: LogoutModalComponent,
      cssClass: 'modal-css'
    });

    await modal.present();
  }

}
