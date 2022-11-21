import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }

  login(): void{
    if(this.usuario.email == null || this.usuario.password == null || this.usuario.password.length === 0){
      Swal.fire({
        icon: 'error',
        title: 'Login',
        text: 'Correo o contraseña están vacíos'
      })
    }
    this.authService.login(this.usuario).subscribe(response => {
      const payload = this.authService.getToken(response.token);
      this.authService.saveToken(response.token);
      this.authService.saveUser(payload);
      Swal.fire({
        icon:'success', 
        title: 'Login',
        text : `Ha logrado iniciar sesión!` ,
      }).then(result => {
        if(result.isConfirmed){
          this.router.navigate(['/home']);
        }
      })
    }, error => {
      if(error.status == 400){
        Swal.fire({
          icon: 'error',
          title: 'Login',
          text: 'Credenciales incorrectas, revisa los datos',
        });
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Login',
          text: 'Error en el servicio de legado Kalum',
        });
      }
    })
  }

}
