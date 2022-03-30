import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  
 // crear formulario de respuesta del login
  loginForm: FormGroup = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    contraseña: ['', [Validators.required]]
  });
  

  constructor( 
    private router: Router, 
    
    private fb: FormBuilder,
  
    ) { 
   
  }


  ngOnInit(): void {
  }


  campoEsValido( campo: string ) {

    return this.loginForm.controls[campo].errors 
            && this.loginForm.controls[campo].touched;
  }

  onSubmit(){
    
   
    
  }

}
