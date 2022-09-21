import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent implements OnInit {

  @Input() menu: 'partners' | 'clients' | 'moodboards | clientList';
  @Input() activeTitle: string;
  @Input() slider: boolean = false;
  @Output() changeSlide = new EventEmitter<object>();

  menuItems = {
    partners: ['partners', 'products'],
    clients: ['clients', 'inspiration'],
    moodboards: ['styles','materials','rooms', 'colors', 'pictures'],
    clientList: ['clients', 'moodboard','statistic'],
    designerMoodboards: ['my moodboards', 'all moodboards']
  }

  constructor() {}

  ngOnInit() {}

  goToSlide(id) {
    this.changeSlide.emit(id);
  }

}
