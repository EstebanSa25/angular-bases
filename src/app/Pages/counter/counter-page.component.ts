import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  /**
   *
   */
  constructor() {
    setInterval(() => {
      this.increaseBy(1);
      console.log('tICK');
    }, 2000);
  }
  counter = 10;
  counterSignal = signal(10);
  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }
  reset(value: number) {
    this.counter = value;
    this.counterSignal.set(value);
  }
}
