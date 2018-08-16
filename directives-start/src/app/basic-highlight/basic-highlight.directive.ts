import { OnInit, ElementRef, Directive } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]' // os [] fazem com que em qualquer elemeneto com appBasicHighlight
    // seja reconhecida a diretiva
})

export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) { }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'pink'; // not a good idea
    }
}