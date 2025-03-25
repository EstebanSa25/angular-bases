import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface ICharacter {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
  // imports: [NgClass],
})
export class DragonBallPageComponent {
  name = signal('');
  power = signal(0);
  characters = signal<ICharacter[]>([{ id: 1, name: 'Goku', power: 9000 }]);
  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });
  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) return;
    const newCharacter: ICharacter = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update((list) => [...list, newCharacter]);
  }
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
