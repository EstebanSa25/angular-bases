import { Component, input } from '@angular/core';
import type { ICharacter } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  title = input.required<string>();
  characters = input.required<ICharacter[]>();
}
