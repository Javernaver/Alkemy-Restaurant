import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from '../../../core/services/alert/alert.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  
 // crear formulario de respuesta del login
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });
  

  constructor( 
    private router: Router, 
    private alerts: AlertService,
    private fb: FormBuilder,
    private auth: AuthService
  ) {
    localStorage.removeItem('token');
   }
   

  ngOnInit(): void {   
  }


  isValid( value: string ) {

    return this.loginForm.controls[value].errors 
            && this.loginForm.controls[value].touched;
  }

  onSubmit(){
    
    if ( this.loginForm.invalid )  {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    try {

      let user: User = {
        email: this.loginForm.controls['email'].value,
        password: this.loginForm.controls['password'].value
      }

      this.auth.login( user )
      .subscribe({
        next: res => {

        //console.log( res );

        localStorage.setItem('token', res.token);

        this.loading = false;
        this.router.navigate(['/restaurant']);  

        },
        error: error => {
          //console.log(error);
          this.alerts.alert('¡Usuario no válido!','¡Correo o Contraseña Incorrectos!, asegurese que se encuentran bien ingresados','error');
          this.loading = false;
          this.loginForm.controls['password'].reset();
        }
      });


      
    } catch (error) {
      this.alerts.alert('Error', 'Error desconocido', 'error');
      this.loading = false;
    }
      
    }


  

}
