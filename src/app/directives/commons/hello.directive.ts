import { Directive, ElementRef, Renderer2 } from "@angular/core";


@Directive({
    selector:'[hello]',
    
})
export class HelloDirective{
    constructor(eleRef:ElementRef,render:Renderer2){
        console.log(eleRef);
        eleRef.nativeElement.style="padding : 20px; background-color:blue;color:white;"
        // render.addClass(eleRef.nativeElement,'jumbo')//bootstrap
     
      
    }
}