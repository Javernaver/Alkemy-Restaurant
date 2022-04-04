import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.css']
})
export class RecipeCardListComponent implements OnInit {

  @Input()
  recipes!: Recipe[];


  constructor() { }

  ngOnInit(): void {
  }

  
}
