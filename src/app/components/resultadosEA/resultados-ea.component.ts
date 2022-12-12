import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../login/auth.service';
import { ResultadosEA } from './resultados-ea.model';
import { ResultadosEAService } from './resultados-ea.service';

@Component({
  selector: 'app-resultados-ea',
  templateUrl: './resultados-ea.component.html',
  styles: [
  ]
})
export class ResultadosEAComponent implements OnInit {

  urlEndPoint: string = 'resultadosEA';
  resultadosEA: ResultadosEA;
  resultados: any[] = [];
  pagination: any;

  constructor(private resultadosEAService: ResultadosEAService, private activatedRoute: ActivatedRoute, public authService: AuthService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let parametro = params.get('page');
      let page: number;
      if(!parametro){
        page = 0;
      }else{
        page = +parametro;
      }
      this.resultadosEAService.getResultadosEA(page).subscribe(response => {
        this.resultados = response.content as ResultadosEA[];
        this.pagination = response;
      })
    })
  }

  eliminar(resultadosEA: ResultadosEA) : void{
    const mensaje = `Esta seguro de eliminar este resultado ${resultadosEA.descripcionResultado}?`
    Swal.fire({icon: 'warning',
    title: 'Resultado de Examen de Admisión',
    text: mensaje,
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: 'Si',
    cancelButtonText: 'No',
    reverseButtons: true
    }).then(resultado => {
      if(resultado.isConfirmed){
        this.resultadosEAService.deleteResultadoEA(resultadosEA.noExpediente).subscribe(()=> {
          this.resultados = this.resultados.filter(elemento => elemento !== resultadosEA);
          Swal.fire({icon: 'success', title: 'Resultado de Examen de Admisión', text: `Registro ${resultadosEA.descripcionResultado} eliminado`})
        });
      }
    })
  }


}
