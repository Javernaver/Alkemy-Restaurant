import { AlertService } from '../../core/services/alert/alert.service';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  menuItems: Recipe[] = [];

  constructor(
    private alerts: AlertService
  ) { }

  addtoMenu(item: Recipe) {

    let index = this.menuItems.indexOf(item);

    if (index === -1) {
      item.quantity = 1;
      this.menuItems.push(item);
      console.log(this.menuItems);
      localStorage.setItem('menuItems', JSON.stringify(this.menuItems));
    }
    else {
      this.menuItems[index].quantity++;
      localStorage.setItem('menuItems', JSON.stringify(this.menuItems));
    }
    this.alerts.successAdd();
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
    return this.menuItems.reduce((acc, curr) => acc + (curr.pricePerServing * curr.quantity), 0);
  }
  
  getMenuItems() {

    this.menuItems = localStorage.getItem('menuItems') ? JSON.parse(localStorage.getItem('menuItems') || '{}') : [];
    return of(this.menuItems);
  }

  
}
