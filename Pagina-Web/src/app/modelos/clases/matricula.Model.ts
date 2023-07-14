
              export class matricula {  
                  MTRC_ID: number;
        MTRC_PASE: string;
        MTRC_ESTADO: string;
        EST_ID: number;
        PRLL_ID: number;
        USR_CREADOR_ID: number;

        nombresEst:string
       // FECHA_CREACION: string;
              constructor(MTRC_ID: number, MTRC_PASE: string, MTRC_ESTADO: string, EST_ID: number, PRLL_ID: number, USR_CREADOR_ID: number,nombresEst:string) {
                  this.MTRC_ID = MTRC_ID;
          this.MTRC_PASE = MTRC_PASE;
          this.MTRC_ESTADO = MTRC_ESTADO;
          this.EST_ID = EST_ID;
          this.PRLL_ID = PRLL_ID;
          this.USR_CREADOR_ID = USR_CREADOR_ID;
          this.nombresEst =nombresEst
          //this.FECHA_CREACION = FECHA_CREACION;
                }
            }
            