import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CarreraTecnicaComponent } from './components/carrera-tecnica/carrera-tecnica.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { APP_ROUTING } from './app.route';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomeService } from './components/home/home.service';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormCarreratecnicaComponent } from './components/carrera-tecnica/form-carreratecnica.component';
import { JornadaComponent } from './components/jornada/jornada.component';
import { PaginationJornadaComponent } from './components/jornada/pagination-jornada.component';
import { FormJornadaComponent } from './components/jornada/form-jornada.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarreraTecnicaComponent,
    InscripcionComponent,
    LoginComponent,
    LogoutComponent,
    PaginationComponent,
    FormCarreratecnicaComponent,
    JornadaComponent,
    PaginationJornadaComponent,
    FormJornadaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
