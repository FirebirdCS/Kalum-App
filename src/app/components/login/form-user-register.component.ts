import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-form-user-register',
  templateUrl: './form-user-register.component.html',
  styles: [
  ]
})
export class FormUserRegisterComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor() { }

  ngOnInit(): void {
  }

  registrar(): void{
    Swal.fire('Registro','Registro creado con éxito', 'success');
  }

  login():void{
    
  }

}
