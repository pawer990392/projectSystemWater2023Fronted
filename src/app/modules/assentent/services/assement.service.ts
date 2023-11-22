import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError as observableThrowError, throwError } from 'rxjs';
import { Parameter, Settlement, SettlementApi } from 'src/app/data/Interfaces/response/settement/settlment.response';
import { AlertService } from 'src/app/shared/services/alert.service';
import { endpoints } from 'src/app/shared/apis/endPoint';
import { environment } from '../../../../environments/environment';
import { MessageService } from 'src/app/shared/services/message.service';


@Injectable({
  providedIn: 'root'
})
export class AssementService {


  private settlementListSubject = new BehaviorSubject<Settlement[]>([]);
  private settlementSubject!: BehaviorSubject<Settlement>;

  private httpHeaders!: HttpHeaders;

  constructor(
    private _http: HttpClient,
    private _httpAlert: AlertService,
    private _messageService:MessageService
  ) {
    this.settlementListSubject = new BehaviorSubject<Settlement[]>([]);
    this.settlementSubject = new BehaviorSubject<Settlement>({} as Settlement);

    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  public get Settlements(): Observable<Array<Settlement>> {
    return this.settlementListSubject.asObservable();
  }

  public getSettlement(): Observable<Settlement> {
    return this.settlementSubject.asObservable();
  }

  public setSettlement(only: Settlement) {
    this.settlementSubject.next(only);
  }

  optiones: Parameter = {
    numPage: 1,
    numRecordPage: 20,
    order: "desc",
    sort: "Id"
  }

  getAllTodo(optiones: Parameter): Observable<SettlementApi> {

    const requestUrl = `${environment.hostBackend}${endpoints.LIST_ALL_SETTLEMENT}`;

    const headers = new HttpHeaders();

    return this._http.post<SettlementApi>(requestUrl, optiones, { headers });
  }
  //checar el sisrema d e¿giaction

}
