import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
//Nuestro servicio para titulos en nuestro proyectos
export class TitleService {

 // preSub=environment.production ? '' :'Desarrollo2023';

  constructor(
    private titleService:Title
  ) { }
  
  // set(title){
  //   this.titleService.setTitle(title);
  // }
}
