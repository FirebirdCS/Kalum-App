import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Jornada } from './jornada.model';
import { JornadaService } from './jornada.service';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styles: [
  ]
})
export class JornadaComponent implements OnInit {

  urlEndPoint: string = 'jornada';
  jornada: Jornada;
  jornadas: any[] = [];
  pagination: any;
  constructor(private jornadaService: JornadaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let parametro = params.get('page');
      let page: number;
      if(!parametro){
        page = 0;
      }else{
        page = +parametro;
      }
      this.jornadaService.getJornadas(page).subscribe(response =>{
        this.jornadas = response.content as Jornada[];
        this.pagination = response;
      });
    })
  }

  eliminar(jornada: Jornada) : void {
    const mensaje = `Esta seguro de eliminar la jornada ${jornada.descripcionJornada}?`
    Swal.fire({icon: 'warning', 
    title: 'Jornada', 
    text: mensaje, 
    showCloseButton: true, 
    showCancelButton: true, 
    confirmButtonText: 'Si', 
    cancelButtonText: 'No', 
    reverseButtons: true}).then(resultado => {
      if(resultado.isConfirmed){
        this.jornadaService.deleteJornada(jornada.jornadaId).subscribe(() => {
          this.jornadas = this.jornadas.filter(elemento => elemento !== jornada);
          Swal.fire({icon: 'success', title: 'Jornada', text: `Registro ${jornada.descripcionJornada} eliminado`})
        });
      }
    });
  }
}
