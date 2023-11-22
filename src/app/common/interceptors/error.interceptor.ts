import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from 'src/app/shared/services/message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private messageService: MessageService
  ) {

  }


  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log("Paso por el inteceptor");
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Aquí puedes manejar el error de acuerdo a tus necesidades
        if (error instanceof HttpErrorResponse) {

          if (error instanceof ErrorEvent) {
            this.messageService.showError("Error en el lado del Cliente", "top center");
          } else {
            this.messageService.showError("Error en el lado del Servidor", "top center");
            if (error.status === 401) {
              this.messageService.showError('Usted no cuenta con permisos para ingresar', 'top right');
            } else if (error.status == 404) {
              this.messageService.showError('La pagina que desea ingresar No Existe', 'top right');
            } else {
              this.messageService.showError('ERROR DE SERVIDOR', 'top right');

            }
          }
        } else {
          console.log('OTRO TIPO DE ERROR');
          this.messageService.showError('OTRO TIPO DE ERROR', 'top right');
        }
        return throwError(error);
      })
    );
  }
}
