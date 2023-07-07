import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { LoginRequest } from 'src/app/modelos/clases/Login.Model';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Subject, debounceTime } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage = '';

  userLoginOn: boolean = false;

  @ViewChild('staticAlert', { static: false })
  staticAlert!: NgbAlert;
  @ViewChild('selfClosingAlert', { static: false })
  selfClosingAlert!: NgbAlert;


  loginForm = this.formBuilder.group({
    user: ['administrador', [Validators.required, Validators.minLength(8)]],
    pswd: ['admin', Validators.required]
  })


  constructor(private router: Router, private formBuilder: FormBuilder, private usuarioService: UsuariosService) {


  }

  ngOnInit(): void {
    this._success.subscribe((message) => (this.successMessage = message));
    this._success.pipe(debounceTime(1000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }
  get user() {
    return this.loginForm.controls.user;
  }

  get pswd() {
    return this.loginForm.controls.pswd;
  }

  login() {
    if (this.loginForm.valid) {
      this.usuarioService.login(this.loginForm.value as LoginRequest).subscribe(
        {
          next: (response) => {
            if (response === 'OK') {
                 this.router.navigateByUrl('/dashboard');
            } else {
              this._success.next("Usuario o contraseña incorrecta.");
            }
          },
          error: (errordata) => {
            this._success.next(errordata);
          }
        }
      );
      this.loginForm.reset();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}
 /* this.usuarioService.update().subscribe(
      {
        next: (response) => {
          console.log('Respuesta:', response);
        },
        error: (errordata) => {
          console.error('Error:', errordata);
        }
      }); */