import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appStyles]'
})
export class StylesDirective {
    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseenter')
    mouseEnterEvent(eventData: Event) {
        this.renderer.addClass(this.elRef.nativeElement, 'styleMovies');
    }

    @HostListener('mouseleave')
    mouseLeaveEvent(eventData: Event) {
        this.renderer.removeClass(this.elRef.nativeElement, 'styleMovies');
    }
}
