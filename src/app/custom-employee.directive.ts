import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustomEmployee]'
})
export class CustomEmployeeDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
}
