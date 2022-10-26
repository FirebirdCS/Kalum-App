import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ResultadosEA } from './resultados-ea.model';
import { ResultadosEAService } from './resultados-ea.service';

@Component({
  selector: 'app-form-resultados-ea',
  templateUrl: './form-resultados-ea.component.html',
  styles: [
  ]
})
export class FormResultadosEAComponent implements OnInit {

  resultados: ResultadosEA = new ResultadosEA();
  titulo:string;
  constructor(private resultadosEAService: ResultadosEAService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const noExpediente = params.get('id');
      if(noExpediente){
        this.titulo = 'Editar registros';
        this.resultadosEAService.getResultadoEA(noExpediente).subscribe((response) => {
          this.resultados = response;
        })
      } else {
        this.titulo = 'Nuevo registro';
      }
    })
  }

  guardar():void {
    this.resultadosEAService.postResultadosEA(this.resultados).subscribe(response => {
      const mensaje = `El resultado con expediente ${response.noExpediente} se ha creado con éxito!`;
      Swal.fire({icon: 'success', title: 'Resultado de Examen de Admisión', text: mensaje}).then(result => {
        this.router.navigate(['/resultadosEA']);
      })
    },
    e => {
      Swal.fire({icon: 'error', title: 'Resultado de Examen de Admisión', text: e});
    });
  }

  actualizar() : void {
    this.resultadosEAService.putResultadosEA(this.resultados).subscribe(response => {
      const mensaje = `El resultado con expediente ${this.resultados.noExpediente} se ha actualizado.`;
      Swal.fire({icon: 'success', title: 'Resultado de Examen de Admisión', text: mensaje}).then(result => {
        this.router.navigate(['/resultadosEA']);
      })
    },
    e =>{
      Swal.fire({icon: 'error', title: 'Resultado de Examen de Admisión', text: e});
    });
  }

}
