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

  constructor(
    private menuService: MenuService
  ) {
    this.menuService.getMenuItems().subscribe(res=>{
      this.menuItems = res;
      this.total = this.menuService.getTotalPrice();
      //console.log(this.menuItems);
    })


   }

  ngOnInit(): void {
    
  }

  removeItem(itemIndex: number){
    this.menuService.removeMenuItem(itemIndex);
    this.total = this.menuService.getTotalPrice();
  }


  emptyMenu(){
    this.menuService.removeAllMenu();
  }

}
