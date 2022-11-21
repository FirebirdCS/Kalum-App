import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarreraTecnica } from './carrera-tecnica.model';
import { CarreraTecnicaService } from './carrera-tecnica.service';
import Swal from 'sweetalert2';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-carrera-tecnica',
  templateUrl: './carrera-tecnica.component.html',
  styles: [
  ]
})
export class CarreraTecnicaComponent implements OnInit {

  urlEndPoint: string = 'carreraTecnica';
  carrerasTecnicas: any[] = [];
  pagination: any;

  constructor(private carreraTecnicaService: CarreraTecnicaService, public authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router) { }

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

  asignar(carreraTecnica:CarreraTecnica):void{
    Swal.fire({
      title: 'Asignar carrera técnica',
      text: `¿Esta seguro de asignarse la carrera técnica ${carreraTecnica.nombre}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then(resultado => {
      if(resultado.isConfirmed){
        Swal.fire({
            title: 'Registro de usuario',
            text: '¿Tienes un usuario con nosotros?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            reverseButtons: true
        }).then(resultado => {
          if(resultado.isConfirmed){
            this.router.navigate(['/login']);
          } else{
            this.router.navigate(['/user/form'])
          }
        })
      }
    });
  }

}
