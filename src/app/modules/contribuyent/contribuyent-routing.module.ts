import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContribuyentLayoutComponent } from './layout/contribuyent-layout/contribuyent-layout.component';
import { RegisterContribuyentComponent } from './pages/register-contribuyent/register-contribuyent.component';
import { ListContribuyentComponent } from './pages/list-contribuyent/list-contribuyent.component';

const routes: Routes = [
  {
    //rutas primaria de  mi componentes
    path:'',
    component:ContribuyentLayoutComponent,
    children:[
      //rutas secundarias de este module
      {
        path:'register-contribuyente',
        component:RegisterContribuyentComponent
      },
      {
        path:'list-contribuyent',
        component:ListContribuyentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContribuyentRoutingModule { }
