import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor( private render:Renderer2,private elementRef:ElementRef) {

    render.setStyle(elementRef.nativeElement,'color','black');
    render.setStyle(elementRef.nativeElement,'font-weight','600');
    render.setStyle(elementRef.nativeElement,'font-size','22px');
   }

}
