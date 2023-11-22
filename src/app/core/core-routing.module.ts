import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './layout/public/public.component';
import { PrivateComponent } from './layout/private/private.component';

const routes: Routes = [
//rutas principales de cada modulos
  {
    path:'',
    component:PublicComponent,
    loadChildren:()=>import('../modules/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'dashboard',
    component:PrivateComponent,
    loadChildren:()=>import('../modules/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'contribuyente',
    component:PrivateComponent,
    loadChildren:()=>import('../modules/contribuyent/contribuyent.module').then(m=>m.ContribuyentModule)
  },
  {
    path:'colonia',
    component:PrivateComponent,
    loadChildren:()=>import('../modules/assentent/assentent.module').then(m=>m.AssententModule)
  },
  {
    path:'toma',
    component:PrivateComponent,
    loadChildren:()=>import('../modules/toma/toma.module').then(m=>m.TomaModule)
  },
  {
    path:'servicio',
    component:PrivateComponent,
    loadChildren:() =>import('../modules/services/services.module').then(m=>m.ServicesModule)
  },
  {
    path:'colonias',
    component:PrivateComponent,
    loadChildren:()=>import('../modules/assentent/assentent.module').then(m=>m.AssententModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
