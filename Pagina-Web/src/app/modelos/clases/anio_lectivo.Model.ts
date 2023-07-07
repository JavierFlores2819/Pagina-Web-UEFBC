
export class anio_lectivo {
      AL_ID: number;
      AL_INI: Date;
      AL_FIN: Date;
      AL_PRD: number;
      AL_SUB_PRD: number;
      AL_ESTADO: string;
      USR_CREADOR_AL_ID: number;
      FECHA_CREACION: string;
  static Model: any;
      constructor(AL_ID: number, AL_INI: Date, AL_FIN: Date, AL_PRD: number, AL_SUB_PRD: number, AL_ESTADO: string, USR_CREADOR_AL_ID: number, FECHA_CREACION: string) {
            this.AL_ID = AL_ID;
            this.AL_INI = AL_INI;
            this.AL_FIN = AL_FIN;
            this.AL_PRD = AL_PRD;
            this.AL_SUB_PRD = AL_SUB_PRD;
            this.AL_ESTADO = AL_ESTADO;
            this.USR_CREADOR_AL_ID = USR_CREADOR_AL_ID;
            this.FECHA_CREACION = FECHA_CREACION;
      }
}
