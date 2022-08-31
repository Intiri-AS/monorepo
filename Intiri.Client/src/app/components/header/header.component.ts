import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

  @Input() isScrolledDown: boolean;

  constructor() {}

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

}
