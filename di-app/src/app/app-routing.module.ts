import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './di-first/list/list.component';
import { InputComponent } from './di-first/input/input.component';

const routes: Routes = [
  {path:'list',component:ListComponent},
  {path:'input',component:InputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
