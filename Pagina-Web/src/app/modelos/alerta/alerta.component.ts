import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent {
  @Input()
  contenido!: string;
  constructor(public activeModal: NgbActiveModal) {}

  closeModal(action: string) {
    this.activeModal.close(action);
  }
}
