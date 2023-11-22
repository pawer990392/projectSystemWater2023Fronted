import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssententRoutingModule } from './assentent-routing.module';
import { AsssetentLayoutComponent } from './layout/asssetent-layout/asssetent-layout.component';
import { CreateAssententComponent } from './pages/create-assentent/create-assentent.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormStartComponent } from './components/form-start/form-start.component';
import { ListAssententComponent } from './pages/list-assentent/list-assentent.component';
import { MaterialModule } from 'src/app/material.module';
import { SearchComponent } from './components/search/search.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from 'src/app/common/interceptors/error.interceptor';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [
    AsssetentLayoutComponent,
    CreateAssententComponent,
    FormStartComponent,
    ListAssententComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    AssententRoutingModule,
    SharedModule,
    MaterialModule,
    MatSortModule,
    

  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorInterceptor,
      multi:true
    }
  ]
})
export class AssententModule { }
