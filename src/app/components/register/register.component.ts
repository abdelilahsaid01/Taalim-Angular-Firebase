import { Router } from '@angular/router';
import { AuthentificationService } from './../../services/authentification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string
  password:string
  password2:string
  constructor(private authService:AuthentificationService,
    private route:Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    if(this.password==this.password2) { 
    this.authService.register(this.email,this.password)
    .then(() => {
      this.authService.sendEmailVerification();
    this.route.navigateByUrl('/') } )
  .catch((error)=> {
    console.log(error)
}) }
else {
  console.log("Verify your password ")
}
 } 

}
