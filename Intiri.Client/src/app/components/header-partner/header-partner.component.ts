import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Project } from 'src/app/models/project.model';
import { AccountService } from 'src/app/services/account.service';
import { PartnerService } from 'src/app/services/partner.service';
import { ProjectService } from 'src/app/services/project.service';
import { SettingsPopoverComponent } from '../settings-popover/settings-popover.component';
import { ProfilePopoverComponent } from '../popovers/profile-popover/profile-popover.component';

@Component({
  selector: 'app-header-partner',
  templateUrl: './header-partner.component.html',
  styleUrls: ['./header-partner.component.scss'],
})
export class HeaderPartnerComponent implements OnInit {

  menuItems = [
    {title: 'PARTNERS.product', url: '/partner'}
  ]

  loggedUser$ = this.accountService.currentUser$;

  isSettingsSelected: boolean;

  profilePicture = null;

  constructor(
    private projectService: ProjectService,
    private accountService: AccountService,
    private partnerServise: PartnerService,
    private router: Router,
    public popoverController: PopoverController) {}

  isActiveRoute(route): boolean {
    return this.router.url === route;
  }

  ngOnInit() {
    this.partnerServise.getPartnerProfile().pipe(take(1)).subscribe(res => {
      if (res.logoPath) {
        this.profilePicture = res.logoPath;
      }
    })
  }

  async showSettings(e: Event) {
    this.isSettingsSelected = true;
    const popover = await this.popoverController.create({
      component: SettingsPopoverComponent,
      componentProps: { headerType: 'partner'},
      event: e,
      dismissOnSelect: false
    });

    await popover.present();

    popover.onDidDismiss().then(() => {
      this.isSettingsSelected = false;
    })
  }

  async showProfilePopover (e: Event) {
    const popover = await this.popoverController.create({
      component: ProfilePopoverComponent,
      componentProps: { headerType: 'partner' },
      event: e,
      dismissOnSelect: false
    });
    await popover.present();
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
