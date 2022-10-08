import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jornada } from './jornada.model';
import { JornadaService } from './jornada.service';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styles: [
  ]
})
export class JornadaComponent implements OnInit {

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
        console.log(this.jornadas);
        console.log(this.pagination);
      });
    })
  }

}
