import { AuthentificationService } from './../../services/authentification.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string
  password: string
  constructor(private authService: AuthentificationService,
    private route: Router) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.route.navigateByUrl('/')
      }
    })
  }

  onLogin() {
    this.authService.login(this.email, this.password)
      .then(auth => {
        console.log(auth)
        if (auth) {
          Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Your are successfully logged',
            showConfirmButton: false,
            timer: 1500
          })
        }
        this.route.navigateByUrl('/')
      })
      .catch(error => {
        Swal.fire(
          'Erreur!',
          'Email or password is incorrect!',
          'error'
        )
      })
  }


  onLoginGoogle() {
    this.authService.loginWithGoogle()
      .then(auth => {
        if (auth) this.route.navigateByUrl('/')
      })
      .catch(error => {
        console.log(error)
      })
  }

  onLoginFacebook() {
    this.authService.loginWithFacebook()
      .then(auth => {
        console.log(auth)
        if (auth) {
          console.log('you are logged successfully!')
          this.route.navigateByUrl('/')
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  async resetEmail() {
    const { value: email } = await Swal.fire({
      title: 'Input email address',
      input: 'email',
      inputPlaceholder: 'Enter your email address',
    })
    if (email) {
      this.authService.sendPasswordResetEmail(email.toString())
      Swal.fire(`You will receved the new password in : ${email}`)
    }
  }
}