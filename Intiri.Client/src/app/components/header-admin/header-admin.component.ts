import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { AccountService } from 'src/app/services/account.service';
import { LanguageService } from 'src/app/services/language.service';
import { SettingsPopoverComponent } from '../settings-popover/settings-popover.component';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
})
export class HeaderAdminComponent implements OnInit {

  loggedUser$ = this.accountService.currentUser$;

  isSettingsSelected: boolean;

  constructor(private router: Router,
    private accountService: AccountService,
    private popoverController: PopoverController,
    private languageService: LanguageService,
    private translate: TranslateService) {}

    menuItems = [
      {title: this.translate.instant("DASHBOARD.dashboard"), url: '/dashboard'},
      {title: this.translate.instant("DASHBOARD.consultations"), url: '/consultations'},
      {title: this.translate.instant("DASHBOARD.partners"), url: '/partners'},
      {title: this.translate.instant("DASHBOARD.designers"), url: '/designers'},
      {title: this.translate.instant("DASHBOARD.clients"), url: '/clients'},
      {title: this.translate.instant("DASHBOARD.moodboards"), url: '/moodboards'},
      {title: this.translate.instant("DASHBOARD.style"), url: '/style'},
    ]

    ngOnInit() {
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        this.translate.setDefaultLang(event.lang);
        this.revokeTranslations();
      });

    }

  isActiveRoute(route): boolean {
    return this.router.url.split('?')[0] === route;
  }

  revokeTranslations() {
    this.menuItems = [
      {title: this.translate.instant("DASHBOARD.dashboard"), url: '/dashboard'},
      {title: this.translate.instant("DASHBOARD.consultations"), url: '/consultations'},
      {title: this.translate.instant("DASHBOARD.partners"), url: '/partners'},
      {title: this.translate.instant("DASHBOARD.designers"), url: '/designers'},
      {title: this.translate.instant("DASHBOARD.clients"), url: '/clients'},
      {title: this.translate.instant("DASHBOARD.moodboards"), url: '/moodboards'},
      {title: this.translate.instant("DASHBOARD.style"), url: '/style'},
    ]
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

  async showSettings(e: Event) {
    this.isSettingsSelected = true;
    const popover = await this.popoverController.create({
      component: SettingsPopoverComponent,
      componentProps: { headerType: 'admin'},
      event: e,
      dismissOnSelect: true
    });

    await popover.present();

    popover.onDidDismiss().then(() => {
      this.isSettingsSelected = false;
    })
  }

}
