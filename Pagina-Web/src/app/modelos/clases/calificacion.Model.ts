
export class calificacion {
    CLF_ID: number;
    CLF_NOTA:number
    CLF_ESTADO:string
    SPRD_ID:number
    MTRC_ID:number
    ASG_PRLL_PRF_ID: number;
    USR_CREADOR_ID:number
   

    constructor(CLF_ID: number,CLF_NOTA:number,CLF_ESTADO:string,SPRD_ID:number,MTRC_ID:number,ASG_PRLL_PRF_ID: number,USR_CREADOR_ID:number) {
        this.CLF_ID = CLF_ID;
        this.CLF_NOTA = CLF_NOTA;
        this.CLF_ESTADO = CLF_ESTADO;
        this.SPRD_ID = SPRD_ID;
        this.MTRC_ID = MTRC_ID;
        this.ASG_PRLL_PRF_ID = ASG_PRLL_PRF_ID;
        this.USR_CREADOR_ID = USR_CREADOR_ID
    }
}
