export class Curso {
    id?:number;
    nombre:string;
    numero:number;
    descrip:string;
    constructor(id:number,nombre:string,numero:number,descrip:string) {
        this.nombre = nombre;
        this.numero = numero;
        this.descrip = descrip;
    }
}