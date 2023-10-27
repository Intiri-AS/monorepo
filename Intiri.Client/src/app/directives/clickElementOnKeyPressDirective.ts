import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appClickElementOnKeyPress]',
})
export class ClickElementOnKeyPressDirective implements OnInit, OnDestroy {
  @Input() key = 'Enter';
  @Input() clickElementAlternativeEvent: string;
  @Input() clickElementCheckIfClassExistsForDisabled: string;
  @Input() clickElementSendAlternativeEvent: string;


  private debugLogs = true;

  private bindedEventHandler = this.eventHandler.bind(this);

  constructor(private el: ElementRef) {}


  runKeyCheck(e: KeyboardEvent) {
    if (this.clickElementAlternativeEvent) {
      return true;
    } else {
      return e.key === this.key;
    }
  }

  runExtraCheck() {
    if (this.clickElementCheckIfClassExistsForDisabled) {
      if (this.debugLogs) {
        console.log('Checking extra class', this.clickElementCheckIfClassExistsForDisabled);
      }
      return !this.el.nativeElement.classList.contains(this.clickElementCheckIfClassExistsForDisabled);
    }
    return true;
  }

  dispatchAlternativeEvent() {
    if (this.clickElementSendAlternativeEvent) {
      if (this.debugLogs) {
        console.log('Dispatching event', this.clickElementSendAlternativeEvent);
      }
      const event = new Event(this.clickElementSendAlternativeEvent);
      window.dispatchEvent(event);
    }
  }

  getEventToSubscribe() {
    if (this.clickElementAlternativeEvent) {
      return this.clickElementAlternativeEvent;
    }
    return 'keyup';
  }

  eventHandler(e: KeyboardEvent) {
    if (e.isComposing || e.keyCode === 229) {
      return;
    }
    if (this.runKeyCheck(e) && this.runExtraCheck()) {
      if (this.debugLogs) {
        console.log('Clicking element', this.el.nativeElement, this.getEventToSubscribe(), this.clickElementCheckIfClassExistsForDisabled);
      }
      this.el.nativeElement.click();
    } else {
      this.dispatchAlternativeEvent();
    }
  }

  ngOnInit(): void {
    if (this.debugLogs) {
      console.log('Registering event listener', this.getEventToSubscribe());
    }
    window.addEventListener(this.getEventToSubscribe(), this.bindedEventHandler);
  }
  ngOnDestroy(): void {
    if (this.debugLogs) {
      console.log('Unregistering event listener', this.getEventToSubscribe());
    }
    window.removeEventListener(this.getEventToSubscribe(), this.bindedEventHandler);
  }
}
