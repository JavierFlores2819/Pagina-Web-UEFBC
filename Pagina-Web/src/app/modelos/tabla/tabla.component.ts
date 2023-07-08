import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {
  @Input() headers: any[] | undefined;
  @Input() data: any[] | undefined;
  @Input() titulo: string = '';
  @Input() icon: string[] | undefined;

  obtenerValores(campo: any): string[] {
    return Object.entries(campo)
      .filter(([key]) => key !== 'id') // Filtrar campos que no sean "id"
      .map(([_, value]) => value as string); // Realizar una verificación de tipo

    // Alternativamente, si deseas mantener el orden original de los campos:
    // const filteredEntries = Object.entries(campo).filter(([key]) => key !== 'id');
    // return filteredEntries.map(([_, value]) => value as string);
  }

}
