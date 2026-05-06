import { CanActivateFn, Router } from '@angular/router';
import { inject, Inject } from '@angular/core';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  
  if (userService.user() && !userService.isTokenExpired()) {
    return true;
  }
  console.log("AUTH GUARD");
  return router.navigate(['user-login']);  
};
