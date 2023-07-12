
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
    //Dirección de residencia del estudiante
    EST_PRO:string 
    EST_CAN:string 
    EST_PARR:string 
    EST_CUE:string 
    EST_DIR:string 
    EST_NAC:string 
    EST_ETN:string 
    EST_NAC_ETN:string 
    EST_COM_ETN:string 
    NEE_DIS:string 
    NES_NAD:string 
    ENF_CAT:string 
    CONADIS:string 
    EST_INTE:string 
    EST_TV:string 
    EST_RAD:string 
    EST_PC:string 
    EST_CEL:string
    constructor(EST_ID: number, EST_DNI: string, EST_NOM: string, EST_NOM2: string, EST_APE: string, EST_APE2: string, EST_FECH_NAC: string, EST_GEN: string, EST_ESTADO: string, REP_ID: number, USR_CREADOR_ID: number,
        EST_PRO:string,EST_CAN:string,EST_PARR:string,EST_CUE:string,EST_DIR:string,EST_NAC:string,EST_ETN:string,EST_NAC_ETN:string,EST_COM_ETN:string,NEE_DIS:string,NES_NAD:string,ENF_CAT:string,CONADIS:string,EST_INTE:string,
        EST_TV:string,EST_RAD:string,EST_PC:string,EST_CEL:string) {
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
        this.EST_PRO=EST_PRO 
        this.EST_CAN=EST_CAN 
        this.EST_PARR =EST_PARR 
        this.EST_CUE=EST_CUE
        this.EST_DIR=EST_DIR
        this.EST_NAC=EST_NAC 
        this.EST_ETN=EST_ETN
        this.EST_NAC_ETN=EST_NAC_ETN 
        this.EST_COM_ETN =EST_COM_ETN 
        this.NEE_DIS=NEE_DIS 
        this.NES_NAD =NES_NAD 
        this.ENF_CAT=ENF_CAT 
        this.CONADIS=CONADIS 
        this.EST_INTE =EST_INTE 
        this.EST_TV=EST_TV
        this.EST_RAD=EST_RAD 
        this.EST_PC=EST_PC
        this.EST_CEL=EST_CEL
    }
}


