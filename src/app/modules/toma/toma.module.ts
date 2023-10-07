import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TomaRoutingModule } from './toma-routing.module';
import { LayoutTomaComponent } from './layout/layout-toma/layout-toma.component';
import { ListTomaComponent } from './pages/list-toma/list-toma.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    LayoutTomaComponent,
    ListTomaComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    TomaRoutingModule
  ]
})
export class TomaModule { }
