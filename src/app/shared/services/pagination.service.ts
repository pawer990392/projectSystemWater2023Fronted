import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class PaginationService {

  constructor() { }
  
  abstract GetAllTodo(size: number,
     sort: string,
      order: string,
       page: number,
       numFilter:number,
       textFilter:string,
        id: number,
         id2?:number): Observable<any>;
  abstract GetSimple(attr:{}): Observable<any>;
}
