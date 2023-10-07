import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutTomaComponent } from './layout/layout-toma/layout-toma.component';
import { ListTomaComponent } from './pages/list-toma/list-toma.component';

const routes: Routes = [

  {
    
    //pagina principal
    path:'',//toma/
    component:LayoutTomaComponent,
    children:[
      {
        path:"list-toma",
        component:ListTomaComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TomaRoutingModule { }
