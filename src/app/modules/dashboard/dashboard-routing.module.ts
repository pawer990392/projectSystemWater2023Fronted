import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';

const routes: Routes = [

{
  //rutas primarias
  path:'',
  component:DashboardLayoutComponent,
  children:[
    //  rutas ecundarias como los compontes
    {
      path:'dashboard',
      component:GraphicsComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
