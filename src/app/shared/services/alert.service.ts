import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
//estos son mis servicios de alerta
export class AlertService {
  constructor() { }
  
  success(title:string,messager:string){
    Swal.fire({   
      icon: 'success',
      title: title,
      text: messager,
      confirmButtonText: "Aceptar",
      width:450
    })
  }
  warn(title:string,messager:string){
    Swal.fire({
      icon: 'warning',
      title: title,
      text: messager,
      confirmButtonText: "Aceptar",
      width:450
    })
  }
  error(title:string,messager:string){
    Swal.fire({
      icon: 'error',
      title: title,
      text: messager,
      confirmButtonText: "Aceptar",
      width:450
    })
}
}
