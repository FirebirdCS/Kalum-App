import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CarreraTecnicaComponent} from './components/carrera-tecnica/carrera-tecnica.component';
import {InscripcionComponent} from './components/inscripcion/inscripcion.component';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import { FormCarreratecnicaComponent } from './components/carrera-tecnica/form-carreratecnica.component';
import { JornadaComponent } from './components/jornada/jornada.component';
import { FormJornadaComponent } from './components/jornada/form-jornada.component';
import { FormUserRegisterComponent } from './components/login/form-user-register.component';
import { ExamenAdmisionComponent } from './components/examen-admision/examen-admision.component';
import { FormExamenAdmisionComponent } from './components/examen-admision/form-examen-admision.component';
import { CalendarComponent } from './shared/calendar/calendar.component';
import { ResultadosEAComponent } from './components/resultadosEA/resultados-ea.component';
import {FormResultadosEAComponent } from './components/resultadosEA/form-resultados-ea.component';
import { AuthGuard } from './components/login/guards/auth.guard';
import {RoleGuard} from './components/login/guards/role.guard';
import {AspiranteComponent} from './components/aspirante/aspirante.component';
import { FormAspiranteComponent } from './components/aspirante/form-aspirante.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'carreraTecnica', component: CarreraTecnicaComponent},
    {path: 'carreraTecnica/page/:page', component: CarreraTecnicaComponent},
    {path: 'login', component: LoginComponent},
    {path: 'user/form', component: FormUserRegisterComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'carreraTecnica/form', component: FormCarreratecnicaComponent, canActivate: [AuthGuard, RoleGuard], data:{role: 'ROLE_ADMIN'}},
    {path: 'carreraTecnica/form/:id', component: FormCarreratecnicaComponent, canActivate: [AuthGuard, RoleGuard], data:{role: 'ROLE_ADMIN'}},
    {path: 'jornada', component: JornadaComponent},
    {path: 'jornada/page/:page', component: JornadaComponent},
    {path: 'jornada/form', component: FormJornadaComponent , canActivate: [AuthGuard, RoleGuard], data:{role: 'ROLE_ADMIN'}},
    {path: 'jornada/form/:id', component: FormJornadaComponent , canActivate: [AuthGuard, RoleGuard], data:{role: 'ROLE_ADMIN'}},
    {path: 'inscripcion', component: InscripcionComponent , canActivate: [AuthGuard]},
    {path: 'inscripcion/page/:page', component: InscripcionComponent},
    {path: 'examenAdmision', component: ExamenAdmisionComponent, canActivate: [AuthGuard]},
    {path: 'examenAdmision/page/:page', component: ExamenAdmisionComponent},
    {path: 'examenAdmision/form', component: FormExamenAdmisionComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_ADMIN'}},
    {path: 'examenAdmision/form/:id', component: FormExamenAdmisionComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_ADMIN'}},
    {path: 'calendarComponent', component: CalendarComponent},
    {path: 'resultadosEA', component: ResultadosEAComponent, canActivate: [AuthGuard]},
    {path: 'resultadosEA/page/:page', component: ResultadosEAComponent},
    {path: 'resultadosEA/form', component: FormResultadosEAComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_ADMIN'}},
    {path: 'resultadosEA/form/:id', component: FormResultadosEAComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_ADMIN'}},
    {path: 'aspirante', component: AspiranteComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_USER'}},
    {path: 'aspirante/page/:page', component: AspiranteComponent},
    {path: 'aspirante/form', component: FormAspiranteComponent,  canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_ADMIN'}},
    {path: 'aspirante/form/:id', component: FormAspiranteComponent,  canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_ADMIN'}},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},

]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);