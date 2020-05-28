import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {EnvService} from '@app/services/env.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private env: EnvService, public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (route.data.scopes) {
      if (route.data.scopes.indexOf(this.env.clientAddedScopeDefinition) > -1){
        return true;
      }
      this.router.navigate(['/notfound']);
      return false;
    }
    return true;
  }
}
