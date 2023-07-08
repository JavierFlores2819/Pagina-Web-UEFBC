import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

interface UserData {
  USR_ID: number;
  USR_DNI: string;
}

@Component({
  selector: 'app-boton-servicio',
  templateUrl: './boton-servicio.component.html',
  styleUrls: ['./boton-servicio.component.scss']
})
export class BotonServicioComponent {
  jsonData: any[] = []; // Aquí se almacenan los datos del servicio JSON

  data: UserData[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.save();
  }
  save(): void {
    let params = {
    
      tabla: "usuario",
      campos:["USR_ID","USR_DNI"]
    };

    this.http.post<UserData[]>("http://localhost:8080/api/get", params).subscribe(
      (resultData: UserData[]) => {
        console.log(resultData);
        this.data = resultData;
      },
      (error: any) => {
        console.error("Error al enviar la solicitud:", error);
      }
    );
  }


  save1(): Promise<any> {
    return new Promise((resolve, reject) => {
      let params = {
        tabla: "usuario",
        campos: ["USR_ID", "USR_DNI"],
        where_nombre: "USR_ID",
        where_valor: 2
      };

      this.http.post("http://localhost:8080/api/get", params).subscribe(
        (resultData: any) => {
         // console.log(resultData);
          resolve(resultData);
        },
        (error: any) => {
          console.error("Error al enviar la solicitud:", error);
          reject(error);
        }
      );
    });
  }


  generatePDF(): void {
    this.save1().then((resultData: any) => {
      const doc = new jsPDF();
      // Crear una matriz con los encabezados de la tabla
      const headers = Object.keys(resultData[0]);

      // Crear una matriz con los valores de la tabla
      const data = resultData.map((obj: UserData) => Object.values(obj));

      // It can parse html:
      // <table id="my-table"><!-- ... --></table>
      autoTable(doc, { html: '#my-table' })

      // Or use javascript directly:
      autoTable(doc, {
        head: [headers],
        body: data,
      })

      doc.save('resultado.pdf');
    }).catch((error: any) => {
      console.error("Error al obtener los datos:", error);
    });
  }
}
