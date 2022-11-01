import { ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { AccountService } from 'src/app/services/account.service';
import { LanguageService } from 'src/app/services/language.service';
import { LanguagePopoverComponent } from '../popovers/language-popover/language-popover.component';

@Component({
  selector: 'app-header-landing',
  templateUrl: './header-landing.component.html',
  styleUrls: ['./header-landing.component.scss'],
})

export class HeaderLandingComponent implements OnInit {
  @Input() isScrolledDown: boolean;

  loggedUser$ = this.accountService.currentUser$;
  loggedInUser: any = {};

  languageImg = '';

  constructor(private popoverController: PopoverController,
              private translate: TranslateService,
              private accountService: AccountService,
              private nav: NavController,
              private cd: ChangeDetectorRef,
              private languageService: LanguageService) {

  }

   ngOnInit(){
    this.languageService.languageChange$.subscribe( response => this.chosenLanguage(response));
    this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      this.chosenLanguage(event.lang);
    });
    this.languageService.getLanguage();
    this.loggedUser$.subscribe( response => {
      this.loggedInUser = response;
    });
  }


  chosenLanguage(lng:string) {
    if (lng === 'en') {
      this.languageImg = 'assets/icon/flags/us.svg';
    } else if (lng === 'no') {
      this.languageImg = 'assets/icon/flags/no.svg';
    }
    this.cd.detectChanges();
  }

  // this is a workaround - usual way does not seem to work properly
  scrollTo(id){
    const x = document.querySelector(`#${id}`);
    if (x){
        x.scrollIntoView({behavior: 'smooth'});
    }
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

  async showLanguage(e: Event) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverComponent,
      event: e,
      dismissOnSelect: true
    });
    await popover.present();
  }

  goToDashboard() {
    this.accountService.currentUser$.subscribe(loggedUser => {
      if (loggedUser) {
        const routes = this.accountService.homepageRoutes;
       this.nav.navigateRoot(routes[loggedUser.roles[0]]);
      }
    });
  }

}
