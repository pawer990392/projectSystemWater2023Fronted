
import { Parameter, Settlement, SettlementApi } from 'src/app/data/Interfaces/response/settement/settlment.response';
import { resultApi } from 'src/app/data/Interfaces/IComponents/result-api-interface';
import { BehaviorSubject } from 'rxjs';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, catchError, finalize, of } from 'rxjs';

import { AssementService } from './assement.service';
import { data } from 'jquery';


export class AssementDataSource implements DataSource<Settlement>{

  private settlementListSubject = new BehaviorSubject<Settlement[]>([]);
  private settlementSubject!: BehaviorSubject<Settlement>;

  private loadingSubject    = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();



  //declarando el tipo de datos que llegara
  private myApiResult:resultApi<Settlement>={
    myData:[],
    page:1,
    totalRow:0,
    perPage:10
  }
  
  paraStar:Parameter={
    numPage:1,
    numRecordPage:10,
    order:"desc",
    sort:"id"
  }
  constructor(
    private _service :AssementService,
    ) { }
  connect(collectionViewer: CollectionViewer): Observable<Settlement[]> {
    return this.settlementListSubject.asObservable();
  }
  disconnect(collectionViewer: CollectionViewer): void {
    this.settlementSubject.complete();
    this.loadingSubject.complete();
  }


  loadSettlement(opcion:Parameter){

    this.loadingSubject.next(true);
    
    this._service.getAllTodo(this.paraStar).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe((data:SettlementApi | never[])=>{
      if (data && 'data' in data && 'items' in data.data && 'totalRecord' in data.data) {
        this.myApiResult.myData = data.data['items'] as Settlement[];
        var numberRow=data.data['totalRecord'];
         this.myApiResult.totalRow=numberRow as number;
         this.settlementListSubject.next(this.myApiResult.myData);
        // console.log('Después de next:', this.settlementListSubject.getValue());

      } 
    }
        
    )

  }
}
