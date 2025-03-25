import { effect, Injectable, signal } from '@angular/core';
import type { ICharacter } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonBallService {
  characters = signal<ICharacter[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: ICharacter) {
    this.characters.update((list) => [...list, character]);
  }
  constructor() {}
}
