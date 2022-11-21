import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { FormJornadaComponent } from './components/jornada/form-jornada.component';
import { FormInscripcionComponent } from './components/inscripcion/form-inscripcion.component';
import { FormUserRegisterComponent } from './components/login/form-user-register.component';
import { ExamenAdmisionComponent } from './components/examen-admision/examen-admision.component';
import { FormExamenAdmisionComponent } from './components/examen-admision/form-examen-admision.component';
import { CalendarComponent } from './shared/calendar/calendar.component';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import { ResultadosEAComponent } from './components/resultadosEA/resultados-ea.component';
import { FormResultadosEAComponent } from './components/resultadosEA/form-resultados-ea.component'; 
import {TokenInterceptor} from './components/interceptors/token';
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
    FormJornadaComponent,
    FormInscripcionComponent,
    FormUserRegisterComponent,
    ExamenAdmisionComponent,
    FormExamenAdmisionComponent,
    CalendarComponent,
    ResultadosEAComponent,
    FormResultadosEAComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    AccordionModule,
    APP_ROUTING
  ],
  
  providers: [HomeComponent,{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
