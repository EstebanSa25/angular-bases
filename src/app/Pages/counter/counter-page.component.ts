import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
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
