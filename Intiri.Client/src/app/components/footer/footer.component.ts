import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor() {}

  // this is a workaround - usual way does not seem to work properly
  scrollTo(id) {
    let x = document.querySelector(`#${id}`);
    if (x) {
      x.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
