import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ComprobantesService {

    comprobantes:any[] = [{
        id:'1',
        nombre:'Factura',
        idHtml: 'compfac'

    },
    {
        id:'2',
        nombre:'Nota de Venta',
        idHtml:'compNotV'

    },
    {
        id:'3',
        nombre:'Retención',
        idHtml: 'compRete'
    },
    {
        id:'4',
        nombre: 'Guía de Remisión',
        idHtml: 'compGuia'
    },
    {
        id:'5',
        nombre: 'Nota de Crédito',
        idHtml: 'compNota'
    }
    ]
}