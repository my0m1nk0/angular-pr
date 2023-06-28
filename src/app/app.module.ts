import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuiltDirectivesComponent } from './directives/built-directives/built-directives.component';
import { HelloDirective } from './directives/commons/hello.directive';
import { AttributeDirComponent } from './directives/attribute-dir/attribute-dir.component';
import { HightLightDirective } from './directives/commons/hightlight.directive';
import { StructureComponent } from './directives/structure/structure.component';
import { AppForDirective } from './directives/commons/app-for.directive';

@NgModule({
  declarations: [
    AppComponent,
    BuiltDirectivesComponent,
    HelloDirective,
    AttributeDirComponent,
    HightLightDirective,
    StructureComponent,
    AppForDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
