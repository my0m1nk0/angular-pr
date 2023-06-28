import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[appFor]'
})

export class AppForDirective implements OnChanges{
    @Input()
    appForIn:any

    constructor(private template:TemplateRef<any>,private container:ViewContainerRef){}
    ngOnChanges(changes: SimpleChanges): void {
        if(this.appForIn){
            console.log(this.appForIn);
            Object.entries(this.appForIn).forEach((e,index)=>{
                // console.log(e);
                // console.log(i);
                this.container.createEmbeddedView(this.template,{
                    k:e[0],
                    v:e[1],
                    i:index
                })
                
                
            })
        }
    }




}