import { AppRoutingModule } from "../app-routing.module";

export class Alumno {
    id?:number;
    ced:string;
    nom1:string;
    nom2:string;
    apeM:string;
    apeP:string;
    gen:string;
    fec_nac:string;
    img:string;

    //NACIONALIDAD DEL ESTUDIANTE
   pro:string;
    canton:string;
    parroquia:string;
    codUnicoElec:string;
    direccion:string;
    nacional:string;
    etnia:string;
    nacEtnia:string;
    comunEtnia:string;

    //NECESIDADES EDUCATIVAS ESPECIALES ASOCIADAS
    neceEspecialHabla:string;
    neceNoAsoDisc:string;
    enferCatas:string;
    conadis:string;

    //INFORMACION TACNOLOGICA Y DE COMUNICACION
    tv:number;
    radio:number;
    pc:number;
    celular:number;
    internet:number;
    obs:string;

    constructor(id:number,ced:string,nom1:string,nom2:string,apeP:string,apeM:string) {
        this.id=id;
        this.ced = ced;
        this.nom1 = nom1;
        this.apeP = apeP;
        this.apeM = apeM;
        
    }
}