import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenAdmision } from './examen-admision.model';
import { ExamenAdmisionService } from './examen-admision.service';

@Component({
  selector: 'app-examen-admision',
  templateUrl: './examen-admision.component.html',
  styles: [
  ]
})
export class ExamenAdmisionComponent implements OnInit {

  urlEndPoint: string = 'examenAdmision';
  examenesAdmision: any[] = [];
  pagination: any;

  constructor(private examenAdmisionService: ExamenAdmisionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      let parametro = params.get('page');
      let page: number;
      if(!parametro){
        page = 0;
      }else{
        page = +parametro;
      }
      this.examenAdmisionService.getExamenesAdmision(page).subscribe(response =>{
        this.examenesAdmision = response.content as ExamenAdmision[];
        this.pagination = response;
      })
    });
  }

}
