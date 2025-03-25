import { Routes } from '@angular/router';
import { CounterPageComponent } from './Pages/counter/counter-page.component';
import { HeroPageComponent } from './Pages/hero/hero-page.component';
import { DragonBallPageComponent } from './Pages/dragonball/dragonball-page.component';
import { DragonBallSuperPageComponent } from './Pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonBallPageComponent,
  },
  {
    path: 'dragonball-super',
    component: DragonBallSuperPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
