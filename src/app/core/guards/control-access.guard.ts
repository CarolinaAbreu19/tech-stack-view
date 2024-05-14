import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { Util } from 'src/app/shared/utils/util';

@Injectable({
  providedIn: 'root'
})
export class ControlAccessGuard implements CanActivate {

    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // const permissaoAcesso = route.data.permissao as string;
        // const permissoesUsuario = Util.getUserSession()?.permissoes;

        // if (!permissoesUsuario?.includes(permissaoAcesso)) {
        //     this.router.navigate(['/sem-permissao']);
        //     return false;
        // }

        return true;
    }
}
