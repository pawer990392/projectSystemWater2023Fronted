import { tableColumn } from "src/app/data/Interfaces/IComponents/column-table-interface";
import { SettlementApi } from "src/app/data/Interfaces/response/settement/settlment.response";

const tableColumns: tableColumn<SettlementApi>[] = [
    {
        label: "Nombre",
        property: "name",
        type: "text",
        meClass: ['w-10']
    },
    {
        label: "F.Creacion",
        property: "CreateDate",
        type: "datetime",
        meClass: ['w-10']
    },
    {
        label: "Acciones",
        property: "menu",
        type: 'buttonGroup',
        buttonItems: [
            {
                buttonLabel: "Editar",
                buttonAction: "edit",
                buttonCondition: 'null',//checar esta parte  
                disable: false
            },
            {
                buttonLabel: "Eliminar",
                buttonAction: "delete",
                buttonCondition: "null",//checar esta parte  
                disable: false
            }
        ],
        meClass: ["w-10"]

    }
]

export const componentsSetting = {
    tableColumns: tableColumns,
    initialSort: "Id",
    initialSortDir: "desc",
    buttonLabel: "Editar",
    buttonLabelThwho: "Eliminar",
    columnFilter: tableColumns.map((column => {
        return {
            label: column.label, property: column.property, type: column.type
        }
        
    }))
}