import { Component, output, signal } from '@angular/core';
import type { ICharacter } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);
  newCharacter = output<ICharacter>();
  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) return;
    const newCharacter: ICharacter = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };
    this.newCharacter.emit(newCharacter);
    // this.characters.update((list) => [...list, newCharacter]);
  }
}
