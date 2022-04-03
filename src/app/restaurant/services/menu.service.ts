import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  menuItems: Recipe[] = [];

  addtoMenu(item: Recipe) {
    this.menuItems.push(item);
    console.log(this.menuItems);
    localStorage.setItem('menuItems', JSON.stringify(this.menuItems));
  }

  removeAllMenu() {
    this.menuItems.splice(0, this.menuItems.length);
    localStorage.removeItem('menuItems');
  }
  removeMenuItem(item: number) {
    
    this.menuItems.splice(item, 1);
    
    localStorage.setItem('menuItems', JSON.stringify(this.menuItems));
    
  }
  getTotalPrice(): number {
    throw new Error('Method not implemented.');
  }
  getMenuItems() {

    this.menuItems = localStorage.getItem('menuItems') ? JSON.parse(localStorage.getItem('menuItems') || '{}') : [];
    return of(this.menuItems);
  }

  constructor() { }
}
