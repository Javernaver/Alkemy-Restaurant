import { Observable, catchError, map, of } from 'rxjs';

import { AlertService } from 'src/app/core/services/alert/alert.service';
import { HttpService } from '../../../core/services/http/http.service';
import { Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesProviderService {

  constructor(
    private httpService: HttpService,
    private alertService: AlertService
  ) { }
  


  searchRecipe(keyword: string): Observable<Recipe[]> {
    
    return this.httpService.get<Recipe[]>(`recipes/complexSearch`, `query=${keyword}&number=10&addRecipeInformation=true`)
    .pipe(
      map( (data: any) => {
          return data.results;
        }
      ),
      catchError( (err) => {
        //console.log(err);
        // muestra el mensaje error como alerta
        this.alertService.alert('Error al obtener las recetas', err.error.message, 'error');
        return of([]);
      })
    );
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.httpService.get<Recipe>(`recipes/${id}/information`);  
  }

}
