import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesLayoutComponent } from './layout/services-layout/services-layout.component';
import { ListServicesComponent } from './pages/list-services/list-services.component';


@NgModule({
  declarations: [
    ServicesLayoutComponent,
    ListServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
