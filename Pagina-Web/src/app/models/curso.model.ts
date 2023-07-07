export class Curso {
    CRS_ID?:number;
    CRS_NOM:number;
    CRS_TIP:string;
    CRS_ESTADO:string;
    /*
    		USR_CREADOR_ID	FECHA_CREACION
    */
    constructor(nombre:number,numero:string,estado:string) {
        this.CRS_NOM = nombre;
        this.CRS_TIP = numero;
        this.CRS_ESTADO = estado;
    }
}