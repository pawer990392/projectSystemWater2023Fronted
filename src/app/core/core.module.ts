import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { CoreLayoutComponent } from "./layout/core-layout/core-layout.component";
import { PublicComponent } from "./layout/public/public.component";
import { PrivateComponent } from "./layout/private/private.component";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [CoreLayoutComponent, PublicComponent, PrivateComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule,MaterialModule,RouterModule]
})
export class CoreModule {}
