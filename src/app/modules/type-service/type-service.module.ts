import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeServiceRoutingModule } from './type-service-routing.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';


@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    TypeServiceRoutingModule
  ]
})
export class TypeServiceModule { }
