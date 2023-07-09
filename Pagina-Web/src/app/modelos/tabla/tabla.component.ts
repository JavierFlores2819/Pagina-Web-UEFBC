import { Component, Input } from '@angular/core';

interface IconItem {
  icono: string;
  routerLink: string;
  ruta:boolean;
  id:boolean;
}

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})

export class TablaComponent {
  @Input() headers: any[] | undefined;
  @Input() data: any[] | undefined;
  @Input() titulo: string = '';
  @Input() icon: IconItem[] | undefined;

  obtenerValores(campo: any): string[] {
    return Object.entries(campo)
      .filter(([key]) => key !== 'id') // Filtrar campos que no sean "id"
      .map(([_, value]) => value as string); // Realizar una verificación de tipo
  }

}
