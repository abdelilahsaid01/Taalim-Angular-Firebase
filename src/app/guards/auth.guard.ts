import { AuthentificationService } from './../services/authentification.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private authService:AuthentificationService,private route:Router) { }
  canActivate():boolean {
     this.authService.getAuth().subscribe(auth => {
     if(!auth) this.route.navigateByUrl('/') })
    return true
    }
  }

