import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDashboard]'
})
export class DashboardDirective {

  @HostBinding('class.showEditIcon') private ishovering: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('mouseenter') onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#e0dddd');
    this.ishovering = true;
  }

  @HostListener('mouseleave') onMouseOut() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#ffffff');
    this.ishovering = false;
  }


}
