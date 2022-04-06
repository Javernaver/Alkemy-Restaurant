import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vegetarian'
})
export class VegetarianPipe implements PipeTransform {

  transform(vegetarian: boolean): string {

    if (vegetarian){
      return 'Its a vegetarian dish';
    }
    return 'Its not a vegetarian dish';

  }

}