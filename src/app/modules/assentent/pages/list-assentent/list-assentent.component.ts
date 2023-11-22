import { Component, OnInit, ViewChild } from "@angular/core";
import { AssementService } from "../../services/assement.service";
import { MatTableDataSource } from "@angular/material/table";
import {
  Parameter,
  Settlement,
  SettlementApi
} from "src/app/data/Interfaces/response/settement/settlment.response";
import { AssementDataSource } from "../../services/assementDataSource";

MatTableDataSource;
@Component({
  selector: "app-list-assentent",
  templateUrl: "./list-assentent.component.html",
  styleUrls: ["./list-assentent.component.css"]
})
export class ListAssententComponent implements OnInit {

  dataSource!: AssementDataSource;
  
  loading: boolean = true;
  displayedColumns: string[] = ["id", "name", "createDate", "actions"];

  paraStar:Parameter={
    numPage:1,
    numRecordPage:10,
    order:"desc",
    sort:"id"
  }
  

  constructor(private _service: AssementService) {  
  }
  ngOnInit(): void {
    
    setTimeout(()=>{
      this.dataSource = new AssementDataSource(this._service);
      this.dataSource.loadSettlement(this.paraStar);
      this.loading=false;
    },1000)
  }

}

/** Announce the change in sort state for assistive technology. */

//   editarItem(object:Settlement) {
//     // Lógica para editar el item
//     console.log('Editar:', object.id);
//   }

// onRowClicked(row:Settlement){
//   console.log('Row clicked: ', row)
// }
