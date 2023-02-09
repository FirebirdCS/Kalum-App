import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { Aspirante } from './aspirante.model';
import { AspiranteService } from './aspirante.service';

@Component({
  selector: 'app-aspirante',
  templateUrl: './aspirante.component.html',
  styles: [
  ]
})
export class AspiranteComponent implements OnInit {

  urlEndPoint: string = 'aspirante';
  aspirantes: any[] = [];
  pagination: any;

  constructor(private aspiranteService: AspiranteService, public authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      let parametro = params.get('page');
      let page: number;
      if(!parametro){
        page = 0;
      }else{
        page = +parametro;
      }
      this.aspiranteService.getAspirantes(page).subscribe(response =>{
        this.aspirantes = response.content as Aspirante[];
        this.pagination = response;
      })
    });
  }

}
