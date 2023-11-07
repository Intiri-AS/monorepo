import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage-angular';
import { forkJoin, from, Subject } from 'rxjs';

export const LNG_KEY = 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  selected = '';
  languageChange$ = new Subject<string>();

  constructor(private translate: TranslateService, private storage: Storage) {}

  setInitialAppLanguage() {
    const browserLang = navigator.language;

    let language = 'no';

    switch (browserLang) {
      case 'en':
        language = 'en';
        break;
      case 'no':
        language = 'no';
        break;
      default:
        language = 'en';
        break;
    }

    this.languageChange$.next(language);
    this.translate.setDefaultLang(language);
    this.storage.get(LNG_KEY).then((val) => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      } else {
        this.setLanguage(language);
        this.selected = language;
      }
    });
  }

  getLanguages() {
    return [
      {
        text: this.translate.instant('COMMON.EN'),
        value: 'en',
        img: 'assets/icon/flags/us.svg',
      },
      {
        text: this.translate.instant('COMMON.NO'),
        value: 'no',
        img: 'assets/icon/flags/no.svg',
      },
    ];
  }

  getLanguage() {
    this.storage.get(LNG_KEY).then((val) => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      } else if (!val) {
        this.setLanguage('no');
      }
    });
  }

  setLanguage(lng) {
    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
    this.languageChange$.next(lng);
  }
}
