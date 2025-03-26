import { effect, Injectable, signal } from '@angular/core';
import type { ICharacter } from '../interfaces/character.interface';

const loadFromLocalStorage = (): ICharacter[] => {
  const characters = localStorage.getItem('characters');
  if (characters) {
    const localStoreObj = JSON.parse(characters);
  }
  return characters ? JSON.parse(characters) : [];
};

@Injectable({ providedIn: 'root' })
export class DragonBallService {
  characters = signal<ICharacter[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: ICharacter) {
    this.characters.update((list) => [...list, character]);
  }
  constructor() {}
}
