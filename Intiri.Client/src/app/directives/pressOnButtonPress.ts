import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appClickElementOnKeyPress]',
})
export class ClickElementOnKeyPressDirective implements OnInit, OnDestroy {
  @Input() key = 'Enter';

  constructor(private el: ElementRef) {}

  eventHandler(e: KeyboardEvent) {
    if (e.isComposing || e.keyCode === 229) {
      return;
    }
    if (e.key === this.key) {
      this.el.nativeElement.click();
    }
  }

  ngOnInit(): void {
    window.addEventListener('keyup', this.eventHandler.bind(this));
  }
  ngOnDestroy(): void {
    window.removeEventListener('keyup', this.eventHandler.bind(this));
  }
}
