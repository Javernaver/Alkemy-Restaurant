import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../../core/services/alert/alert.service';
import { Recipe } from '../../models/recipe.model';
import { RecipesProviderService } from '../../services/providers/recipes-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-screen',
  templateUrl: './restaurant-screen.component.html',
  styleUrls: ['./restaurant-screen.component.css']
})
export class RestaurantScreenComponent implements OnInit {

  results!: Recipe[] | undefined;

  recipe: Recipe | undefined;

  term: string = 'pasta';

  msgs: any[] = [];

  constructor(
    private recipesP: RecipesProviderService,
    private router: Router,
    private alerts: AlertService
  ) { 
    this.recipesP.searchRecipe(this.term).subscribe( data => this.results = data);
     

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


  search(keyword: string) {
    this.term = keyword;
    console.log(keyword);

    this.recipesP.searchRecipe(keyword).subscribe( data => this.results = data);
  }

 
}
