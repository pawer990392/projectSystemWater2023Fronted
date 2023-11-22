import { Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

 private _router :Router =inject(Router);


  Funcionando():void{
   alert("Funcioando");
  }
  public irIinicio():void{
    this._router.navigate(['dashboard']);
  }
  public goListContribuyente():void{
    this._router.navigate(['contribuyente/list-contribuyent']);
  }
  public goAddContribuyente():void{
    this._router.navigate(['contribuyente/register-contribuyente'])
  }
  public goAddSettlement():void{
    this._router.navigate(["colonia/list-Asemtamiento"]);
  }

}
