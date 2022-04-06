import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/menu.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-menu-screen',
  templateUrl: './menu-screen.component.html',
  styleUrls: ['./menu-screen.component.css']
})
export class MenuScreenComponent implements OnInit {

  menuItems !: Recipe[] | undefined;

  total !: number;

  invalid: boolean = false;

  constructor(
    private menuService: MenuService
  ) {
    this.menuService.getMenuItems().subscribe(res=>{
      this.menuItems = res;
      this.total = this.menuService.getTotalPrice();
      this.invalid = this.menuService.checkMenu();
      //console.log(this.menuItems);
    })


   }

  ngOnInit(): void {
    
  }

  removeItem(itemIndex: number){
    this.menuService.removeMenuItem(itemIndex);
    this.total = this.menuService.getTotalPrice();
    this.invalid = this.menuService.checkMenu();
  }


  emptyMenu(){
    this.menuService.removeAllMenu();
    this.invalid = this.menuService.checkMenu();
  }

  checkMenu ( ): boolean {
    return this.menuService.checkMenu();
  }

  addOne(index: number){
    this.menuItems![index].quantity++;
    this.total = this.menuService.getTotalPrice();
    this.invalid = this.menuService.checkMenu();
  }

  minusOne(index: number){
    if (this.menuItems![index].quantity > 1){
      this.menuItems![index].quantity--;
      this.total = this.menuService.getTotalPrice();
      this.invalid = this.menuService.checkMenu();
    }
  }

}
