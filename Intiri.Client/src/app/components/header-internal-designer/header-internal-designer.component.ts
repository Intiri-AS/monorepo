import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { AccountService } from 'src/app/services/account.service';
import { SettingsPopoverComponent } from '../settings-popover/settings-popover.component';

@Component({
  selector: 'app-header-internal-designer',
  templateUrl: './header-internal-designer.component.html',
  styleUrls: ['./header-internal-designer.component.scss'],
})

export class HeaderInternalDesignerComponents {

 

  loggedUser$ = this.accountService.currentUser$;

  constructor(
    private router: Router,
    private accountService: AccountService,
    public popoverController: PopoverController,
    private translate: TranslateService
  ) {}

  menuItems = [
    {title: this.translate.instant("COMMON.client"), url: '/client-list'},
    {title: this.translate.instant("NEW-PROJECT.style"), url: '/style-list'},
    {title: this.translate.instant("COMMON.moodboard"), url: '/my-moodboard'},
  ]

  ngOnInit() {
    this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      this.translate.setDefaultLang(event.lang);
      this.revokeTranslations();
    });
  }

  revokeTranslations() {
    this.menuItems = [
      {title: this.translate.instant("COMMON.client"), url: '/client-list'},
      {title: this.translate.instant("NEW-PROJECT.style"), url: '/style-list'},
      {title: this.translate.instant("COMMON.moodboard"), url: '/my-moodboard'},
    ]
  }

  isActiveRoute(route): boolean {
    return this.router.url === route;
  }

  async showSettings(e: Event) {
    const popover = await this.popoverController.create({
      component: SettingsPopoverComponent,
      componentProps: { headerType: 'designer'},
      event: e,
      dismissOnSelect: true
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
}
