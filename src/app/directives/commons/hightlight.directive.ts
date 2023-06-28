import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from "@angular/core";

@Directive({
    selector:'[hightLight]'
})
export class HightLightDirective implements OnChanges{

    @Input()
    hightLight:string='';
    @Input()
    textColor:string=''

    constructor(private el:ElementRef,private render:Renderer2){

        console.log(this.hightLight);
        

    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        this.render.setStyle(this.el.nativeElement,'background-color',this.hightLight);
        // this.render.setStyle(this.el.nativeElement,'background-color',this.hightLight || 'silver');(highlight color ma pay htar yin)
        this.render.setStyle(this.el.nativeElement,'padding','20px');
        this.render.setStyle(this.el.nativeElement,'color',this.textColor || 'silver')


        
        
    }
    @HostListener('mouseenter')
    mouseIn(){
    this.render.setStyle(this.el.nativeElement,'font-size','40px')
    }
    @HostListener('mouseleave')
    mouseOut(){
        this.render.removeStyle(this.el.nativeElement,'font-size')
    }


}