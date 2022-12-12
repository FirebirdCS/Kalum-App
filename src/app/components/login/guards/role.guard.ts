import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.isAuthenticated()){
        this.router.navigate(['/login']);
        return false;
      }
      let role = route.data['role'] as string;
      if(this.authService.hasRoles(role)){
        return true;
      }
    Swal.fire({title: 'Advertencia', text: 'No se encuentra este recurso', icon: 'warning'});
    this.router.navigate(['/carreraTecnica']);
    return false;
  
  }
  
}
