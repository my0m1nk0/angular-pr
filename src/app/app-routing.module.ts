import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltDirectivesComponent } from './directives/built-directives/built-directives.component';
import { AppComponent } from './app.component';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
