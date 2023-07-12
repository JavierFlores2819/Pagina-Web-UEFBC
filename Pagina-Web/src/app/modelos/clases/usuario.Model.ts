
export class usuario {
    USR_ID?: number;
    USR_DNI: string;
    USR_NOM: string;
    USR_NOM2: string;
    USR_APE:string
    USR_APE2:string
    USR_TEL:string
    USR_MAIL: string;
    USR:string
    USR_PSWD: string;
    USR_ESTADO: string;
    USR_TIPO: string;
    
    constructor(USR_DNI: string, USR_NOM: string,USR_NOM2: string,USR_APE:string,USR_APE2:string ,USR_TEL: string,USR_MAIL: string,USR: string,  USR_PSWD: string, USR_ESTADO: string, USR_TIPO: string) {
        this.USR_DNI = USR_DNI;
        this.USR_NOM = USR_NOM;
        this.USR_NOM2 = USR_NOM2;
        this.USR_APE = USR_APE;
        this.USR_APE2 = USR_APE2
        this.USR_TEL = USR_TEL;
        this.USR_MAIL = USR_MAIL;
        this.USR = USR;
        this.USR_PSWD = USR_PSWD;
        this.USR_ESTADO = USR_ESTADO;
        this.USR_TIPO = USR_TIPO;
    }
}
