import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AnioLectivoService } from 'src/app/servicios/anio-lectivo.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { ReportesService } from 'src/app/servicios/reportes.service';

@Component({
  selector: 'app-report-estudiantes',
  templateUrl: './report-estudiantes.component.html',
  styleUrls: ['./report-estudiantes.component.scss']
})
export class ReportEstudiantesComponent implements OnInit {
  options: any[] = [];
  form = new FormGroup({
    select: new FormControl(''),
  });
  data: any[] = [];
  headers: string[] = [];
  selectedValue:string='';
  constructor(private anioLectivoService: AnioLectivoService, private authService: AuthService, private reporteService: ReportesService) {
  }

  ngOnInit(): void {
    this.anioLectivoService.getAll().subscribe(data => {
      this.options = data;
    });
  }

  onSubmit() {
    this.selectedValue = this.form.get('select')?.value ?? '';
    const usuario = this.authService.getUser();
    this.reporteService.getDataRepre(this.selectedValue, usuario.dni).subscribe(data => {
      this.data = data.data;
      this.headers = data.headers;
    });
  }

  obtenerValores(campo: any): string[] {
    return Object.entries(campo)
      .filter(([key]) => key !== 'id') // Filtrar campos que no sean "id"
      .map(([_, value]) => value as string); // Realizar una verificación de tipo
  }

  generarPDF(id: string) {

    console.log('Generando PDF para el ID:'+this.selectedValue, id);

  }
}
