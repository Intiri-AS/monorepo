import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language.service';
import * as LanguageActions from 'src/app/store/actions/language.actions'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  language: any
}

@Component({
  selector: 'app-language-popover',
  templateUrl: './language-popover.component.html',
  styleUrls: ['./language-popover.component.scss'],
})

export class LanguagePopoverComponent implements OnInit {

  languages = [];
  selected = '';
  language$: Observable<any>;

  constructor(
    private popoverController: PopoverController,
    private languageService: LanguageService,
    private store: Store<AppState>
  ) {
    this.language$ = store.select('language');
  }

  ngOnInit() {
      this.languages = this.languageService.getLanguages();
      this.selected = this.languageService.selected;
  }

  selectLanguage(lng) {
    this.store.dispatch(new LanguageActions.Set(lng));
    this.languageService.setLanguage(lng);
    this.popoverController.dismiss();
  }
}
