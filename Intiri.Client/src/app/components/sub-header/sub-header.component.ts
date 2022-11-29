import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent {

  @Input() menu: 'partners' | 'clients' | 'moodboards' | 'clientList' | 'designerMoodboards' | 'style';
  @Input() activeTitle: number;
  @Input() slider: boolean = false;
  @Output() changeSlide = new EventEmitter<object>();

  currentLang: string = ''


  constructor(private translate: TranslateService) {}

  menuItems: any = {
    partners: [this.translate.instant("DASHBOARD.partners"), this.translate.instant("PARTNERS.products")],
    clients: [this.translate.instant("DASHBOARD.clients"), this.translate.instant("CLIENTS.inspiration")],
    moodboards: [this.translate.instant("STYLE.styles"), this.translate.instant("STYLE.materials"), this.translate.instant("STYLE.rooms"), this.translate.instant("MY-INTIRI.colors"), this.translate.instant("STYLE.pictures")],
    clientList: [this.translate.instant("DASHBOARD.clients"), this.translate.instant("DASHBOARD.statistic"), this.translate.instant("DASHBOARD.ratings")],
    designerMoodboards: [this.translate.instant("DASHBOARD.my-moodboards"), this.translate.instant("DASHBOARD.all-moodboards")],
    style: [this.translate.instant("STYLE.styles"), this.translate.instant("STYLE.materials"), this.translate.instant("STYLE.rooms"), this.translate.instant("MY-INTIRI.colors"), this.translate.instant("STYLE.pictures")]
  }

   ngOnInit() {
    this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      this.translate.setDefaultLang(event.lang);
      this.revokeTranslations();
    });
  }

  revokeTranslations() {
  this.menuItems = {
      partners: [this.translate.instant("DASHBOARD.partners"), this.translate.instant("PARTNERS.products")],
      clients: [this.translate.instant("DASHBOARD.clients"), this.translate.instant("CLIENTS.inspiration")],
      moodboards: [this.translate.instant("STYLE.styles"), this.translate.instant("STYLE.materials"), this.translate.instant("STYLE.rooms"), this.translate.instant("MY-INTIRI.colors"), this.translate.instant("STYLE.pictures")],
      clientList: [this.translate.instant("DASHBOARD.clients"), this.translate.instant("DASHBOARD.statistic"), this.translate.instant("DASHBOARD.ratings")],
      designerMoodboards: [this.translate.instant("DASHBOARD.my-moodboards"), this.translate.instant("DASHBOARD.all-moodboards")],
      style: [this.translate.instant("STYLE.styles"), this.translate.instant("STYLE.materials"), this.translate.instant("STYLE.rooms"), this.translate.instant("MY-INTIRI.colors"), this.translate.instant("STYLE.pictures")]
    }
  }

  goToSlide(id) {
    this.changeSlide.emit(id);
  }

}
