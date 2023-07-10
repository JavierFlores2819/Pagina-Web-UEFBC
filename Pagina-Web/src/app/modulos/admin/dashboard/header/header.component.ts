import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertaComponent } from 'src/app/modelos/alerta/alerta.component';
import { usuario } from 'src/app/modelos/clases/usuario.Model';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() collapsed = true;
  @Input() screenWidth = 0;
  routerLink = 'institucion/usuarios/1';
  usuario:any;
  constructor(private modalService: NgbModal, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = this.authService.getUser();
  }

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  openModal() {
    const modalRef = this.modalService.open(AlertaComponent);
    modalRef.componentInstance.activeModal.update({ size: 'sm', centered: true });
    modalRef.componentInstance.contenido = '¿Desea cerrar sesión?';

    modalRef.result.then((result) => {
      if (result === 'save') {
        this.authService.logout();
        // Redirigir al usuario al login
        this.router.navigate(['/login']); // Ajusta la ruta según tu configuración
        // O recargar la página
        window.location.reload();
        console.log(result);
      }
    }).catch((error) => {
      // Lógica para manejar el cierre inesperado del modal
    });
  }
}
