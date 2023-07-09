
export class calificacion {
    CLF_ID: number;
    CLF_PRD: string;
    CLF_SPRD: string;
    CLF_NOTA: number;
    CLF_ESTADO: string;
    MTRC_ID: number;
    ASG_PRLL_PRF_ID: number;
   
    constructor(CLF_ID: number, CLF_PRD: string, CLF_SPRD: string, CLF_NOTA: number, CLF_ESTADO: string, MTRC_ID: number, ASG_PRLL_PRF_ID: number) {
        this.CLF_ID = CLF_ID;
        this.CLF_PRD = CLF_PRD;
        this.CLF_SPRD = CLF_SPRD;
        this.CLF_NOTA = CLF_NOTA;
        this.CLF_ESTADO = CLF_ESTADO;
        this.MTRC_ID = MTRC_ID;
        this.ASG_PRLL_PRF_ID = ASG_PRLL_PRF_ID;
    }
}
