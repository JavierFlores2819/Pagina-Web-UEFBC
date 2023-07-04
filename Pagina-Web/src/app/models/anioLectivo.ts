export class AnioLectivo {
    id?:number;
    fecInicio:string;
    fecFin:string;
    periodo:number;
    subPer:number;
    estado:string
    user:number
    fecC:string
    //inicial:boolean;
   // basica:boolean;
   // bachiller:boolean
    constructor(fecIni:string,fecFin:string,periodo:number,subPer:number,estado:string){
        this.fecInicio=fecIni;
        this.fecFin=fecFin;
        this.periodo=periodo;
        this.subPer=subPer;
        this.estado = estado
       // this.inicial=inicial;
       // this.basica=basica;
//this.bachiller=bachiller;
    }
}