import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CarreraTecnicaComponent} from './components/carrera-tecnica/carrera-tecnica.component';
import {InscripcionComponent} from './components/inscripcion/inscripcion.component';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'carreraTecnica', component: CarreraTecnicaComponent},
    {path: 'carreraTecnica/page/:page', component: CarreraTecnicaComponent},
    {path: 'inscripcion', component: InscripcionComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},

]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);