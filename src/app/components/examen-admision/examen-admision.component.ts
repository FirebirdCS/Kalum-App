import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../login/auth.service';
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

  constructor(private examenAdmisionService: ExamenAdmisionService, private activatedRoute: ActivatedRoute, public authService: AuthService) { }

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

  eliminar(examenAdmision: ExamenAdmision) : void {
    const mensaje = `Esta seguro de eliminar la fecha del examen ${examenAdmision.fechaExamen}?`
    Swal.fire({icon: 'warning', 
    title: 'Examen de admisión', 
    text: mensaje, 
    showCloseButton: true, 
    showCancelButton: true, 
    confirmButtonText: 'Si', 
    cancelButtonText: 'No', 
    reverseButtons: true}).then(resultado => {
      if(resultado.isConfirmed){
        this.examenAdmisionService.deleteExamenAdmision(examenAdmision.examenId).subscribe(() => {
          this.examenesAdmision = this.examenesAdmision.filter(elemento => elemento !== examenAdmision);
          Swal.fire({icon: 'success', title: 'Examen de admisión', text: `Fecha de examen ${examenAdmision.fechaExamen} eliminado`})
        });
      }
    });
  }

}
