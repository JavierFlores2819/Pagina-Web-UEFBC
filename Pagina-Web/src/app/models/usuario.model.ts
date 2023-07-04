export class Usuario {
    id?:number
    ced:string;
    nombres:string
    apellidos:string
    correo:string
    pswd:string
    rol:string
    estado:string;
    fechaCreacion:string;
    imgPerfil?:string

 //`USR_DNI`, `USR`, `USR_PSWD`, `USR_ESTADO`, `USR_TIPO`, `FECHA_CREACION`

    constructor(ced:string,nombres:string,pswd:string,estado:string,rol:string,fechaCreacion:string) {
        this.ced = ced;
        this.nombres = nombres;
        this.pswd = pswd;
        this.estado = estado;
        this.rol = rol;
        this.fechaCreacion = fechaCreacion;
    }
}