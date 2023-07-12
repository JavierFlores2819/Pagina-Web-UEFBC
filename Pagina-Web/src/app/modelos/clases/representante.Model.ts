
export class representante {
    REP_ID?: number;
    REP_DNI: string;
    REP_NOM: string;
    REP_NOM2: string;
    REP_APE: string
    REP_APE2: string
    REP_DIR: string;
    REP_CEL: string;
    REP_TEL: string;
    REP_MAIL: string;
    REP_REL_FAM: string;
    REP_ESTADO: string;
    USR_CREADOR_ID: number;


    constructor(REP_DNI: string, REP_NOM: string,REP_NOM2:string,REP_APE:string,REP_APE2:string, REP_DIR: string, REP_CEL: string, REP_TEL: string, REP_MAIL: string, REP_REL_FAM: string, REP_ESTADO: string, USR_CREADOR_ID: number) {
        this.REP_DNI = REP_DNI;
        this.REP_NOM = REP_NOM;
        this.REP_NOM2=REP_NOM2
        this.REP_APE=REP_APE
        this.REP_APE2 =REP_APE2
        this.REP_DIR = REP_DIR;
        this.REP_CEL = REP_CEL;
        this.REP_TEL = REP_TEL;
        this.REP_MAIL = REP_MAIL;
        this.REP_REL_FAM = REP_REL_FAM;
        this.REP_ESTADO = REP_ESTADO;
        this.USR_CREADOR_ID = USR_CREADOR_ID;
    }
}
