import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarreraTecnica } from './carrera-tecnica.model';
import { CarreraTecnicaService } from './carrera-tecnica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrera-tecnica',
  templateUrl: './carrera-tecnica.component.html',
  styles: [
  ]
})
export class CarreraTecnicaComponent implements OnInit {

  carrerasTecnicas: any[] = [];
  pagination: any;

  constructor(private carreraTecnicaService: CarreraTecnicaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      let parametro = params.get('page');
      let page: number;
      if(!parametro){
        page = 0;
      }else{
        page = +parametro;
      }
      this.carreraTecnicaService.getCarrerasTecnicas(page).subscribe(response =>{
        this.carrerasTecnicas = response.content as CarreraTecnica[];
        this.pagination = response;
        console.log(this.carrerasTecnicas);
        console.log(this.pagination);
      })
    });
  }

  eliminar(carreraTecnica: CarreraTecnica) : void {
    const mensaje = `Esta seguro de eliminar la carrera técnica ${carreraTecnica.nombre}?`
    Swal.fire({icon: 'warning', 
    title: 'Carreras Técnicas', 
    text: mensaje, 
    showCloseButton: true, 
    showCancelButton: true, 
    confirmButtonText: 'Si', 
    cancelButtonText: 'No', 
    reverseButtons: true}).then(resultado => {
      if(resultado.isConfirmed){
        this.carreraTecnicaService.deleteCarreraTecnica(carreraTecnica.carreraId).subscribe(() => {
          this.carrerasTecnicas = this.carrerasTecnicas.filter(elemento => elemento !== carreraTecnica);
          Swal.fire({icon: 'success', title: 'Carreras técnicas', text: `Registro ${carreraTecnica.nombre} eliminado`})
        });
      }
    });
  }

}
