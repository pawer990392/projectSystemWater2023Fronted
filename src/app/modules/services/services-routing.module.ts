import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesLayoutComponent } from './layout/services-layout/services-layout.component';
import { ListServicesComponent } from './pages/list-services/list-services.component';

const routes: Routes = [
  {
    path:'',
    component:ServicesLayoutComponent,
    children:
    [
{
  path:'Listar-servicios',
  component:ListServicesComponent
}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
