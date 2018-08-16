import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  /* Sempre usar o renderer para fazer mnaipulações do DOM
     All render methods: https://angular.io/api/core/Renderer2 */
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor: String = 'aquamarine';

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'aquamarine');
  }

  @HostListener('mouseenter') mouseover() { //can receive paramters (eventData: Event)
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'turquoise');
    this.backgroundColor = 'turquoise';
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'aquamarine');
    this.backgroundColor = 'aquamarine';
  }

}
