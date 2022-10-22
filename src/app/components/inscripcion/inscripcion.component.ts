import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inscripcion } from './inscripcion.model';
import { InscripcionService } from './inscripcion.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styles: [
  ]
})
export class InscripcionComponent implements OnInit {

  urlEndPoint: string = 'inscripcion';
  inscripcion: Inscripcion;
  inscripciones: any[] = [];
  pagination: any;
  constructor(private inscripcionService: InscripcionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      let parametro = params.get('page');
      let page: number;
      if(!parametro){
        page = 0;
      }else{
        page = +parametro;
      }
      this.inscripcionService.getInscripciones(page).subscribe(response =>{
        this.inscripciones = response.content as Inscripcion[];
        this.pagination = response;
        console.log(this.inscripciones);
        console.log(this.pagination);
      });
    });
  }

}
