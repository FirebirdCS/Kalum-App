import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/login/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  private _name: string;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout():void{
    const name = this.authService.usuario.username;
    this.authService.logout();
    Swal.fire({
      icon: 'success', 
      title: 'Logout',  
      text: `Ha cerrado sesión de la página`
    });
    this.router.navigate(['/login']);
  }

}
