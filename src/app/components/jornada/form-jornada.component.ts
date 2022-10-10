import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Jornada } from './jornada.model';
import { JornadaService } from './jornada.service';

@Component({
  selector: 'app-form-jornada',
  templateUrl: './form-jornada.component.html',
  styles: [
  ]
})
export class FormJornadaComponent implements OnInit {

  jornada: Jornada = new Jornada();
  titulo:string;
  constructor(private jornadaService: JornadaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const jornadaId = params.get('id');
      if(jornadaId) {
        this.titulo = 'Editar registro';
        this.jornadaService.getJornada(jornadaId).subscribe((response) => {
          this.jornada = response;
        })
      } else {
        this.titulo = 'Nuevo registro';
      }
    });
  }

  guardar() : void{
    this.jornadaService.postJornada(this.jornada).subscribe(response => {
        const mensaje = `La jornada ${response.jornadaTipo} se ha creado con éxito!`;
        Swal.fire({icon: 'success', title: 'Jornadas', text: mensaje}).then(result => {
          this.router.navigate(['/jornada']);
        })
    },
    e =>{
      Swal.fire({icon: 'error', title: 'Jornadas', text: e});
    });
  }

  actualizar() : void{
    this.jornadaService.putJornada(this.jornada).subscribe(response => {
      const mensaje = `La carrera ${this.jornada.jornadaTipo} se ha actualizado`;
        Swal.fire({icon: 'success', title: 'Jornada', text: mensaje}).then(result => {
          this.router.navigate(['/jornada']);
        })
    },
    e =>{
      Swal.fire({icon: 'error', title: 'Jornada', text: e});
    });
  }

}
