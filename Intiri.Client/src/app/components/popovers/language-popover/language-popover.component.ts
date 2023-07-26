import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language.service';
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
  ) {}

  ngOnInit() {
      this.languages = this.languageService.getLanguages();
      this.selected = this.languageService.selected;
  }

  selectLanguage(lng) {
    this.languageService.setLanguage(lng);
    this.popoverController.dismiss();
  }
}
