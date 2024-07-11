import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../services/data.service';
@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterCharacter implements PipeTransform {
  transform(characters: Character[], arg: string): Character[] {
    if (!arg) return characters;

    let resultado: Character[] = [];

    for (const character of characters) {
      if (character.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultado = [...resultado, character];
      }
    }

    return resultado;
  }
}
