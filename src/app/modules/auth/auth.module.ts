import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { SingOutComponent } from './pages/sing-out/sing-out.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    AuthLayoutComponent,
    SingInComponent,
    SingOutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
