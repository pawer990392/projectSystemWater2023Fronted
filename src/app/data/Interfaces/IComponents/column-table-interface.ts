//creamos un pequeño interfaz relacionando con nuestra componetes
//tabla y encual twndra las sigueitnes formato, es decir son propiedades
//genercias que puede tener nuestra tabla

export interface tableColumn<T>{
    label:string;
    property: keyof T | string;
    type: 'text' | 'textTruncate' | 'image' | 'badge' | 'progress' | 'checkbox' | 'button' | 'periodo' | 'date' | 'datetime' | 'clickButton' | 'currency' | 'byteConversion' | 'buttonGroup';
    buttonItems?: buttonItems<T>[];
    visible?:boolean;
    meClass?:string[];
}
export interface buttonItems<T>{
    buttonLabel: string;
    buttonAction: string;
    disable?: keyof T | boolean;
    visible?: boolean;
    buttonCondition?:string;
}