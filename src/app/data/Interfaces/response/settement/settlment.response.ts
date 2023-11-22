export interface Settlement{
    id :number
    name:string,
    createDate:Date
}
//interfaz adicional del Api
export interface SettlementApi{ 
    data:[],
    totalRecord:number
    message:string,
    errors:string,
    isSuccess:boolean

}
export interface Parameter{
    numPage: number,
    numRecordPage: number,
    order: string,
    sort: string,
    // records: number,
    // numFilter: number,
    // textFilter:string,
    // stateFilter: number,
    // starDate: string,
    // endDate: string,
    // download: boolean
}    