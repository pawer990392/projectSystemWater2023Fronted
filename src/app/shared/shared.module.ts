import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import swal from 'sweetalert2';
import { ListTableComponent } from './components/list-table/list-table.component';
import { TittleComponentsComponent } from './components/tittle-components/tittle-components.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ListTableComponent,
    TittleComponentsComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    ListTableComponent,
    TittleComponentsComponent
  ]
})
export class SharedModule { }
