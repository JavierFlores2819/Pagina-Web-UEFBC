
export class estudiante {
    EST_ID: number;
    EST_DNI: string;
    EST_NOM: string;
    EST_NOM2: string;
    EST_APE: string;
    EST_APE2: string;
    EST_FECH_NAC: string;
    EST_GEN: string;
    EST_ESTADO: string;
    REP_ID: number;
    USR_CREADOR_ID: number;
    FECHA_CREACION: string;
    constructor(EST_ID: number, EST_DNI: string, EST_NOM: string, EST_NOM2: string, EST_APE: string, EST_APE2: string, EST_FECH_NAC: string, EST_GEN: string, EST_ESTADO: string, REP_ID: number, USR_CREADOR_ID: number, FECHA_CREACION: string) {
        this.EST_ID = EST_ID;
        this.EST_DNI = EST_DNI;
        this.EST_NOM = EST_NOM;
        this.EST_NOM2 = EST_NOM2;
        this.EST_APE = EST_APE;
        this.EST_APE2 = EST_APE2;
        this.EST_FECH_NAC = EST_FECH_NAC;
        this.EST_GEN = EST_GEN;
        this.EST_ESTADO = EST_ESTADO;
        this.REP_ID = REP_ID;
        this.USR_CREADOR_ID = USR_CREADOR_ID;
        this.FECHA_CREACION = FECHA_CREACION;
    }
}
