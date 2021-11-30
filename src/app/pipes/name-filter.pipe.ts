import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from "../model/pet";

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: Pet[], name: string): Pet[] {
    name = name.toLocaleLowerCase();
    return pets.filter(pet => pet.name.toLocaleLowerCase().includes(name));
  }

}
