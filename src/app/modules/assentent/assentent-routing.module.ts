import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsssetentLayoutComponent } from './layout/asssetent-layout/asssetent-layout.component';
import { ListAssententComponent } from './pages/list-assentent/list-assentent.component';

const routes: Routes = [

{
  path:'',
  component:AsssetentLayoutComponent,
  children:[
    {
      path:'list-Asemtamiento',
      component:ListAssententComponent
    },{
      path:'',
      redirectTo:'list-Asemtamiento',
      pathMatch:'full'
    }
  ]
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssententRoutingModule { }
