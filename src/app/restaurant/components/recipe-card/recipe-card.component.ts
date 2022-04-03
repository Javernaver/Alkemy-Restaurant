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

  @Output() 
  itemAdded: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
  }

  addtoMenu() {
    this.itemAdded.emit(true);
    
    this.menuService.addtoMenu(this.recipe!);
  }

}
