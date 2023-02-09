import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CarreraTecnica } from '../carrera-tecnica/carrera-tecnica.model';
import { CarreraTecnicaService } from '../carrera-tecnica/carrera-tecnica.service';
import { ExamenAdmision } from '../examen-admision/examen-admision.model';
import { ExamenAdmisionService } from '../examen-admision/examen-admision.service';
import { Jornada } from '../jornada/jornada.model';
import { JornadaService } from '../jornada/jornada.service';
import { AuthService } from '../login/auth.service';
import { Usuario } from '../login/usuario.model';
import { Aspirante } from './aspirante.model';
import { AspiranteService } from './aspirante.service';

@Component({
  selector: 'app-form-aspirante',
  templateUrl: './form-aspirante.component.html',
  styles: [
  ]
})
export class FormAspiranteComponent implements OnInit {
  aspirante: Aspirante = new Aspirante();
  carrerasTecnicas: any[] = [];
  jornadas: any[] = [];
  examenesAdmision: any[] = [];
  usuario: Usuario;
  
  constructor(private aspiranteService: AspiranteService, private carreraTecnicaService: CarreraTecnicaService, private jornadaService: JornadaService, 
    private examenAdmisionService: ExamenAdmisionService, private authService: AuthService, private router: Router) { 
      this.usuario = this.authService.usuario;
      console.log(this.usuario.email);
    }

  
  ngOnInit(): void {
    this.carreraTecnicaService.getListCarrerasTecnicas().subscribe(response => {
      this.carrerasTecnicas = response as CarreraTecnica[];      
    });

    this.jornadaService.getListJornadas().subscribe(response => {
      this.jornadas = response as Jornada[];
    });

    this.examenAdmisionService.getListExamenesAdmision().subscribe(response => {
      this.examenesAdmision = response as ExamenAdmision[];
    })
    
  }

  guardar() : void{
    this.aspiranteService.postAspirantes(this.aspirante).subscribe(response => {
        const mensaje = `El aspirante ${response.nombreCompleto} se ha creado con éxito!`;
        Swal.fire({icon: 'success', title: 'Aspirantes', text: mensaje}).then(result => {
          this.router.navigate(['/aspirante']);
        })
    },
    e =>{
      Swal.fire({icon: 'error', title: 'Aspirante', text: e});
    });
  }
}
