import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltDirectivesComponent } from './directives/built-directives/built-directives.component';
import { AttributeDirComponent } from './directives/attribute-dir/attribute-dir.component';
import { StructureComponent } from './directives/structure/structure.component';


const routes: Routes = [
  {
    path:'dir',component:BuiltDirectivesComponent
  }
  ,{
    path:'attr',component:AttributeDirComponent
  },
  {
    path:'stru',component:StructureComponent
  },
  {
    path:'',redirectTo:'/dir',pathMatch:'full'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
