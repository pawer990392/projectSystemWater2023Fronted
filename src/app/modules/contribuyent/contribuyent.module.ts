import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContribuyentRoutingModule } from './contribuyent-routing.module';
import { ContribuyentLayoutComponent } from './layout/contribuyent-layout/contribuyent-layout.component';
import { RegisterContribuyentComponent } from './pages/register-contribuyent/register-contribuyent.component';
import { ListContribuyentComponent } from './pages/list-contribuyent/list-contribuyent.component';


@NgModule({
  declarations: [
    ContribuyentLayoutComponent,
    RegisterContribuyentComponent,
    ListContribuyentComponent
  ],
  imports: [
    CommonModule,
    ContribuyentRoutingModule
  ]
})
export class ContribuyentModule { }
