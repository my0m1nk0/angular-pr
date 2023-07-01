import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './di-first/input/input.component';
import { ListComponent } from './di-first/list/list.component';
import { MessageRepository } from './resources/message.resources';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MessageRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
