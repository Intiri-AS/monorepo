import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Project } from 'src/app/models/project.model';
import { AccountService } from 'src/app/services/account.service';
import { ProjectService } from 'src/app/services/project.service';
import { SettingsPopoverComponent } from '../settings-popover/settings-popover.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  menuItems = [
    {title: 'My Intiri', url: '/my-intiri'},
    {title: 'Book a designer', url: '/book-designer'},
  ]

  loggedUser$ = this.accountService.currentUser$;

  isSelected: boolean;

  constructor(private projectService: ProjectService, private accountService: AccountService,  private router: Router, public popoverController: PopoverController) {}

  isActiveRoute(route): boolean {
    return this.router.url === route;
  }

  async showSettings(e: Event) {
    this.isSelected = true;
    const popover = await this.popoverController.create({
      component: SettingsPopoverComponent,
      componentProps: { headerType: 'user'},
      event: e,
      dismissOnSelect: false
    });

    await popover.present();

    popover.onDidDismiss().then(() => {
      this.isSelected = false;
    })
  }

  menuOpened() {
    const x = document.querySelector('#home');
    x['style'].overflow = 'hidden'
    x['style'].height = '100vh'
  }
  menuClosed() {
    const x = document.querySelector('#home');
    x['style'].height = 'auto'
  }
  removeProjectDraft(){
    this.projectService.setCurrentProject(new Project());
  }


}
