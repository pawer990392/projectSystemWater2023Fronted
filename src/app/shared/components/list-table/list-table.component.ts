import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { PaginationService } from '../../services/pagination.service';
import { tableColumn } from 'src/app/data/Interfaces/IComponents/column-table-interface';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent<T> implements OnInit,OnChanges,AfterViewInit {



  



  constructor(
    
  ){

  }
  ngOnInit(): void {

}

  
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
   
  }


  


  


  
}
