import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { Recipe } from '../../models/recipe.model';
import { RecipesProviderService } from '../../services/providers/recipes-provider.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-recipe-view-screen',
  templateUrl: './recipe-view-screen.component.html',
  styleUrls: ['./recipe-view-screen.component.css']
})
export class RecipeViewScreenComponent implements OnInit {

  recipe !: Recipe ;

  summary = '';


  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeP: RecipesProviderService,
    private menuService: MenuService
  ) {
    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => this.recipeP.getRecipe(id) )
    )
    .subscribe( recipe => {
      this.recipe = recipe;
      this.summary = this.recipe.summary;
    });
  }
 

  ngOnInit(): void {
    this.summary = this.recipe.summary;
  }

  addToMenu() {
    this.menuService.addtoMenu(this.recipe);
  }
}
