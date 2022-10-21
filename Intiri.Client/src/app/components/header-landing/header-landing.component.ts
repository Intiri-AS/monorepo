import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { from } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { LanguagePopoverComponent } from '../popovers/language-popover/language-popover.component';

@Component({
  selector: 'app-header-landing',
  templateUrl: './header-landing.component.html',
  styleUrls: ['./header-landing.component.scss'],
})

export class HeaderLandingComponent {
  @Input() isScrolledDown: boolean;

  languageImg: string = ''
  language: any = ''

  constructor(private popoverController: PopoverController, 
              private translate: TranslateService,
              private languageService: LanguageService) {}

   ngOnInit(){
    this.languageService.languageChange$.subscribe( response => this.chosenLanguage(response)),
    this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      this.chosenLanguage(event.lang);
    });
  }

  chosenLanguage(lng:string) {
    if (lng === 'en') {
      this.languageImg = 'assets/icon/flags/us.svg'
    } else if (lng === 'no') {
      this.languageImg = 'assets/icon/flags/no.svg'
    }
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
      // componentProps: { headerType: 'admin'},
      event: e,
      dismissOnSelect: true
    });
    await popover.present();
  }

}
