import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language-popover',
  templateUrl: './language-popover.component.html',
  styleUrls: ['./language-popover.component.scss'],
})

export class LanguagePopoverComponent implements OnInit {

  languages = [];
  selected = '';

  constructor(
    private popoverController: PopoverController,
    private languageService: LanguageService
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
