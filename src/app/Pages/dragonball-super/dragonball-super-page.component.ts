import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonBallService } from '../../services/dragonball.service';

interface ICharacter {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonBallSuperPageComponent {
  // constructor(public DragonBallService: DragonBallService) {}
  public dragonballService = inject(DragonBallService);
}
