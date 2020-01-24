import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTableEdit]'
})
export class TableEditDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    //console.info(this.el.nativeElement)
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
  }
  @Input('fields') private Fields: any;
  @HostBinding('class.showEditIcon') private ishovering: boolean;


  @HostListener('mouseenter') onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#e0dddd');
    this.ishovering = true;
  }

  @HostListener('mouseleave') onMouseOut() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#ffffff');
    this.ishovering = false;
    for (let filedName in this.Fields) {
      const spanElement = this.el.nativeElement.querySelector('#display-' + this.Fields[filedName]);
      const inputElement = this.el.nativeElement.querySelector('#edit-' + this.Fields[filedName]);
      this.renderer.removeClass(spanElement, 'hidden');
      this.renderer.addClass(spanElement, 'display');
      this.renderer.removeClass(inputElement, 'display');
      this.renderer.addClass(inputElement, 'hidden');
    }
  }

  @HostListener('click', ['$event.target']) onClick(target) {
    for (let filedName in this.Fields) {
      const spanElement = this.el.nativeElement.querySelector('#display-' + this.Fields[filedName]);
      const inputElement = this.el.nativeElement.querySelector('#edit-' + this.Fields[filedName]);
      this.renderer.removeClass(spanElement, 'display');
      this.renderer.addClass(spanElement, 'hidden');
      this.renderer.removeClass(inputElement, 'hidden');
      this.renderer.addClass(inputElement, 'display');
    }

  }

}
