import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth=inject(AuthService);
  const router=inject(Router);
  if (auth.isLoggedIn()) {
    return true;
  }else{
    router.navigate(['login']);
    return false;
  }
};

export const authGuardLogin: CanActivateFn = (route, state) => {
  const auth=inject(AuthService);
  const router=inject(Router);
  if (auth.isLoggedIn()) {
    router.navigate(['dashboard']);
    return false;
  }else{
    return true;
  }
};
