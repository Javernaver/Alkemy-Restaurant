import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuService } from '../../services/menu.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() 
  recipe!: Recipe | undefined;


  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
  }

  addtoMenu() {
    
    
    this.menuService.addtoMenu(this.recipe!);
  }

}
