import { TypeSnackBarPositionHorizontal, TypeSnackBarPositionVertical } from "src/app/common/models/types";

export interface resultApi<T>{   
    myData:T[];
    page:number;
    totalRow:number;
    perPage:number
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
export interface IPosicion{
    horizontalPosition: TypeSnackBarPositionHorizontal;
	verticalPosition: TypeSnackBarPositionVertical;
}