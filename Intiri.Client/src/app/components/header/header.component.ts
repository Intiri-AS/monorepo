import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Project } from 'src/app/models/project.model';
import { AccountService } from 'src/app/services/account.service';
import { ProjectService } from 'src/app/services/project.service';
import { SettingsPopoverComponent } from '../settings-popover/settings-popover.component';
import { ProfilePopoverComponent } from '../popovers/profile-popover/profile-popover.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuItems = [
    { title: 'MY-INTIRI.intiri', url: '/my-intiri' },
    { title: 'MY-INTIRI.book', url: '/book-designer' },
  ];

  loggedUser$ = this.accountService.currentUser$;

  isSettingsSelected: boolean;
  isCreateNewProjectPage: boolean = false;

  constructor(
    private projectService: ProjectService,
    private accountService: AccountService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    public popoverController: PopoverController
  ) {}

  ngOnInit(): void {
    if (this.activateRoute.snapshot.routeConfig.path === 'new-project') {
      this.isCreateNewProjectPage = true;
    }
  }

  isActiveRoute(route): boolean {
    return this.router.url === route;
  }

  async showSettings(e: Event) {
    this.isSettingsSelected = true;
    const popover = await this.popoverController.create({
      component: SettingsPopoverComponent,
      componentProps: { headerType: 'user' },
      event: e,
      dismissOnSelect: false,
    });

    await popover.present();

    popover.onDidDismiss().then(() => {
      this.isSettingsSelected = false;
    });
  }

  async showProfilePopover(e: Event) {
    const popover = await this.popoverController.create({
      component: ProfilePopoverComponent,
      componentProps: { headerType: 'user' },
      event: e,
      dismissOnSelect: false,
    });
    await popover.present();
  }

  menuOpened() {
    const x = document.querySelector('#home');
    x['style'].overflow = 'hidden';
    x['style'].height = '100vh';
  }
  menuClosed() {
    const x = document.querySelector('#home');
    x['style'].height = 'auto';
  }
  removeProjectDraft() {
    this.projectService.setCurrentProject(new Project());
  }
}
