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

  recipe : Recipe = {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 7,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 1,
    "spoonacularScore": 81,
    "healthScore": 41,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 89.96,
    "id": 658827,
    "title": "Rösti With Papaya Salad",
    "readyInMinutes": 45,
    "servings": 6,
    "sourceUrl": "http://www.foodista.com/recipe/F5CRZ54Z/rosti-with-papaya-salad",
    "image": "https://spoonacular.com/recipeImages/658827-312x231.jpg",
    "imageType": "jpg",
    "summary": "You can never have too many side dish recipes, so give Rösti With Papaya Salad a try. For <b>88 cents per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. This recipe makes 6 servings with <b>267 calories</b>, <b>5g of protein</b>, and <b>15g of fat</b> each. It is a good option if you're following a <b>dairy free</b> diet. 1 person were impressed by this recipe. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. A mixture of pepper powder, ginger, papaya, and a handful of other ingredients are all it takes to make this recipe so delicious. All things considered, we decided this recipe <b>deserves a spoonacular score of 81%</b>. This score is excellent. Try <a href=\"https://spoonacular.com/recipes/swiss-rsti-salad-522119\">Swiss rösti salad</a>, <a href=\"https://spoonacular.com/recipes/paleta-de-papaya-y-coco-papaya-and-coconut-popsicle-45474\">Paleta De Papaya Y Coco (papayan And Coconut Popsicle)</a>, and <a href=\"https://spoonacular.com/recipes/beachy-papaya-boats-with-papaya-seed-drizzle-610519\">Beachy Papaya Boats with Papaya Seed Drizzle</a> for similar recipes.",
    "cuisines": [],
    "dishTypes": [
      "side dish"
    ],
    "diets": [
      "dairy free"
    ],
    "occasions": [],
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Heat oil in a pan, add the mustard seeds, when they begin to splutter, add the chillies and turmeric powder.",
            "ingredients": [
              {
                "id": 2043,
                "name": "turmeric",
                "localizedName": "turmeric",
                "image": "turmeric.jpg"
              },
              {
                "id": 2024,
                "name": "mustard seeds",
                "localizedName": "mustard seeds",
                "image": "mustard-seeds.png"
              },
              {
                "id": 11819,
                "name": "chili pepper",
                "localizedName": "chili pepper",
                "image": "red-chili.jpg"
              },
              {
                "id": 4582,
                "name": "cooking oil",
                "localizedName": "cooking oil",
                "image": "vegetable-oil.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              }
            ]
          },
          {
            "number": 2,
            "step": "Add the grated papaya and salt and cook for a couple of minutes and keep it aside.Squeeze out the excess water from the grated potatoes.",
            "ingredients": [
              {
                "id": 11352,
                "name": "potato",
                "localizedName": "potato",
                "image": "potatoes-yukon-gold.png"
              },
              {
                "id": 9226,
                "name": "papaya",
                "localizedName": "papaya",
                "image": "papaya.png"
              },
              {
                "id": 14412,
                "name": "water",
                "localizedName": "water",
                "image": "water.png"
              },
              {
                "id": 2047,
                "name": "salt",
                "localizedName": "salt",
                "image": "salt.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 3,
            "step": "Place the grated potatoes, onions, bread crumbs, ginger, pepper powder and salt in a bowl and mix well.Take a little portion of the potato mixture, make a ball and gently flatten it.",
            "ingredients": [
              {
                "id": 18079,
                "name": "breadcrumbs",
                "localizedName": "breadcrumbs",
                "image": "breadcrumbs.jpg"
              },
              {
                "id": 11352,
                "name": "potato",
                "localizedName": "potato",
                "image": "potatoes-yukon-gold.png"
              },
              {
                "id": 11216,
                "name": "ginger",
                "localizedName": "ginger",
                "image": "ginger.png"
              },
              {
                "id": 11282,
                "name": "onion",
                "localizedName": "onion",
                "image": "brown-onion.png"
              },
              {
                "id": 1002030,
                "name": "pepper",
                "localizedName": "pepper",
                "image": "pepper.jpg"
              },
              {
                "id": 2047,
                "name": "salt",
                "localizedName": "salt",
                "image": "salt.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404783,
                "name": "bowl",
                "localizedName": "bowl",
                "image": "bowl.jpg"
              }
            ]
          },
          {
            "number": 4,
            "step": "Sprinkle a few drops of oil on a non stick pan and pan fry the rsti on a low flame till both the sides are evenly golden.",
            "ingredients": [
              {
                "id": 4582,
                "name": "cooking oil",
                "localizedName": "cooking oil",
                "image": "vegetable-oil.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              }
            ]
          },
          {
            "number": 5,
            "step": "Place the rosti on a serving dish, top it with the papya salad, garnish it with the chillies and serve.",
            "ingredients": [
              {
                "id": 11819,
                "name": "chili pepper",
                "localizedName": "chili pepper",
                "image": "red-chili.jpg"
              }
            ],
            "equipment": []
          }
        ]
      }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/roesti-with-papaya-salad-658827",
    "quantity": 3,
    instructions: '',
    ketogenic: false,
    whole30: false,
    extendedIngredients: [],
    winePairing: undefined
  };

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
