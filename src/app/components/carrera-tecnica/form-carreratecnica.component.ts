import { Component, OnInit } from '@angular/core';
import { CarreraTecnica } from './carrera-tecnica.model';
import { CarreraTecnicaService } from './carrera-tecnica.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-carreratecnica',
  templateUrl: './form-carreratecnica.component.html',
  styles: [
  ]
})
export class FormCarreratecnicaComponent implements OnInit {

  carreraTecnica: CarreraTecnica = new CarreraTecnica();

  titulo:string;

  constructor(private carreraTecnicaService: CarreraTecnicaService, private router: Router, private activatedRoute: ActivatedRoute)  { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const carreraId = params.get('id');
      if(carreraId) {
        this.titulo = 'Editar registro';
        this.carreraTecnicaService.getCarreraTecnica(carreraId).subscribe((response) => {
          this.carreraTecnica = response;
        })
      } else {
        this.titulo = 'Nuevo registro';
      }
    });
  }

  guardar() : void{
    this.carreraTecnicaService.postCarreraTecnica(this.carreraTecnica).subscribe(response => {
        const mensaje = `La carrera ${response.nombre} se ha creado con éxito!`;
        Swal.fire({icon: 'success', title: 'Carreras Técnicas', text: mensaje}).then(result => {
          this.router.navigate(['/carreraTecnica']);
        })
    },
    e =>{
      Swal.fire({icon: 'error', title: 'Carreras Técnicas', text: e});
    });
  }

  actualizar() : void{
    this.carreraTecnicaService.putCarreraTecnica(this.carreraTecnica).subscribe(response => {
      const mensaje = `La carrera ${this.carreraTecnica.nombre} se ha actualizado`;
        Swal.fire({icon: 'success', title: 'Carreras Técnicas', text: mensaje}).then(result => {
          this.router.navigate(['/carreraTecnica']);
        })
    },
    e =>{
      Swal.fire({icon: 'error', title: 'Carreras Técnicas', text: e});
    });
  }
}
