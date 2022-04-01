import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../models/recipe.model';
import { RecipesProviderService } from '../../providers/recipes-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-screen',
  templateUrl: './restaurant-screen.component.html',
  styleUrls: ['./restaurant-screen.component.css']
})
export class RestaurantScreenComponent implements OnInit {

  results: Partial<Recipe[]> = [];

  recipe: Recipe | undefined;

  constructor(
    private recipesP: RecipesProviderService,
    private router: Router
  ) { 
    this.recipesP.searchRecipe('pasta').subscribe( data => this.results = data);
     

    /* this.recipesP.getRecipe('saddsadsa').subscribe(
      {
        next: (data) => {
          console.log(data);
          this.recipe = data;
        },
        error: (err) => {
          console.log(err);
        }
        
      }
    ); */
  }
  

  ngOnInit(): void {
  }

}
