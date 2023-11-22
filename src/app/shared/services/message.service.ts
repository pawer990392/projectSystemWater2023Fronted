import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import {
	TypeSnackBarPosition,
	TypeSnackBarPositionHorizontal,
	TypeSnackBarPositionVertical
} from '../../common/models/types';
import { IPosicion } from 'src/app/data/Interfaces/IComponents/result-api-interface';

@Injectable({
	providedIn: 'root'
})
export class MessageService {
	private SNACKBAR_TYPE_INFO = 1;
	private SNACKBAR_TYPE_WARNING = 2;
	private SNACKBAR_TYPE_ERROR = 3;

	constructor(private _snackBar: MatSnackBar) {}

	showInfo(message: string, position: TypeSnackBarPosition, duration?: number): void {
		this.showSnackBar(message, position, this.SNACKBAR_TYPE_INFO, duration);
	}

	showWarning(message: string, position: TypeSnackBarPosition, duration?: number): void {
		this.showSnackBar(message, position, this.SNACKBAR_TYPE_WARNING, duration);
	}

	showError(message: string, position: TypeSnackBarPosition, duration?: number): void {
		this.showSnackBar(message, position, this.SNACKBAR_TYPE_ERROR, duration);
	}

	private showSnackBar(
		message: string,
		position: TypeSnackBarPosition,
		type: number,
		duration?: number
	) {
		if (!duration) duration = 3000;

		const positionSnack = this.getPosition(position);

		this._snackBar.open(message, '', {
			duration: duration,
			horizontalPosition: positionSnack.horizontalPosition,
			verticalPosition: positionSnack.verticalPosition,
			panelClass: this.getClassColor(type)
		});
	}

	private getPosition(position: TypeSnackBarPosition): IPosicion {
		switch (position) {
			case 'bottom center':
				return { horizontalPosition: 'center', verticalPosition: 'bottom' };
			case 'bottom left':
				return { horizontalPosition: 'left', verticalPosition: 'bottom' };
			case 'bottom right':
				return { horizontalPosition: 'right', verticalPosition: 'bottom' };
			case 'top center':
				return { horizontalPosition: 'center', verticalPosition: 'top' };
			case 'top left':
				return { horizontalPosition: 'left', verticalPosition: 'top' };
			default:
				return { horizontalPosition: 'right', verticalPosition: 'top' };
		}
	}

	private getClassColor(type: number): string {
		switch (type) {
			case 2:
				return 'snackbar-warning';
			case 3:
				return 'snackbar-error';
			default:
				return 'snackbar-info';
		}
	}
  showSnackbar(message: string, position: string): void {
    this._snackBar.open(message, 'Cerrar', {
      duration: 5000,
      verticalPosition: position.split(' ')[0] as MatSnackBarVerticalPosition,
      horizontalPosition: position.split(' ')[1] as MatSnackBarHorizontalPosition,
    });
  
  }
}