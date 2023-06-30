export class Usuario {
    id?:number
    nombres:string
    apellidos:string
    correo:string
    rol:number
    imgPerfil:string

    constructor(nombres:string,apellidos:string,correo:string,rol:number) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.correo = correo;
        this.rol = rol;
    }
}