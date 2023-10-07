import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssententRoutingModule } from './assentent-routing.module';
import { AsssetentLayoutComponent } from './layout/asssetent-layout/asssetent-layout.component';
import { CreateAssententComponent } from './pages/create-assentent/create-assentent.component';
import { ListAssententComponent } from './pages/list-assentent/list-assentent.component';


@NgModule({
  declarations: [
    AsssetentLayoutComponent,
    CreateAssententComponent,
    ListAssententComponent
  ],
  imports: [
    CommonModule,
    AssententRoutingModule
  ]
})
export class AssententModule { }
