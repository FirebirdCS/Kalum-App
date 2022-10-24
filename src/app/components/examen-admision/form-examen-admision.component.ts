import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ExamenAdmision } from './examen-admision.model';
import { ExamenAdmisionService } from './examen-admision.service';

@Component({
  selector: 'app-form-examen-admision',
  templateUrl: './form-examen-admision.component.html',
  styles: [
  ]
})
export class FormExamenAdmisionComponent implements OnInit {

  examenAdmision: ExamenAdmision = new ExamenAdmision();

  titulo:string;

  constructor(private examenAdmisionService: ExamenAdmisionService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const examenId = params.get('id');
      if(examenId){
        this.titulo = 'Editar registro';
        this.examenAdmisionService.getExamenAdmision(examenId).subscribe((response) => {
          this.examenAdmision = response;
        })
      }else{
        this.titulo = 'Nuevo registro';
      }
    })
  }

  guardar(): void {
    this.examenAdmisionService.postExamenAdmision(this.examenAdmision).subscribe(response => {
      const mensaje = `El examen admisión con fecha del ${response.fechaExamen} ha sido creado`;
      Swal.fire({icon: 'success', title: 'Examen de admision', text: mensaje}).then(result => {
        this.router.navigate(['/examenAdmision'])
      })
    },
    e => {
      Swal.fire({icon: 'error', title: 'Examen de admisión', text: e});
      console.log(e);
    });
  }

  actualizar(): void {
    this.examenAdmisionService.putExamenAdmision(this.examenAdmision).subscribe(response => {
      const mensaje = `El examen admisión con fecha del ${this.examenAdmision.fechaExamen} ha sido actualizado`;
      Swal.fire({icon: 'success', title: 'Examen de admision', text: mensaje}).then(result => {
        this.router.navigate(['/examenAdmision'])
      })
    },
    e => {
      Swal.fire({icon: 'error', title: 'Examen de admisión', text: e});
      console.log(e);
    });
  }

  

}
