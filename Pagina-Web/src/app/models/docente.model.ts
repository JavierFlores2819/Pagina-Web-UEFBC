export class Docente {

    id?:number;
    ced:string;
    nom:string;
    ape:string;

    constructor(id:number,ced:string,nom:string,ape:string) {
        this.id=id;
        this.ced=ced;
        this.nom=nom;
        this.ape=ape;
    }
}