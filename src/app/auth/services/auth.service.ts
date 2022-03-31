import { AlertService } from 'src/app/core/services/alert/alert.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = environment.authUrl;
  private token: string = ''; 

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertService: AlertService
  ) { }
  


  login(user: User | Partial<User>) {

    return this.http.post<any>(this.authUrl, user).pipe(
      tap( res => this.token = res.token)
    );
  }


  verifyAuth() {

    if (!localStorage.getItem('token')) {
      return of(false); 
    }
    
    return of(true);
  }

  invalidAccess() {
    this.alertService.alert('Acceso restringido','No tiene permiso para acceder a esta area, debe ser un usuario válido!', 'error');
    this.router.navigate(['/auth/login']);
  }

}
