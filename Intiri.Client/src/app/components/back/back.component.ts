import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss'],
})
export class BackComponent implements OnInit {
  @Input() backPath: string;
  @Input() additionalButtons: Array<any>;

  constructor() {}

  ngOnInit() {}
}
