import { Component, HostListener } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Subject } from 'rxjs';

interface Size {
  width: number;
  height: number;
}

interface Coordinates {
  x: number;
  y: number;
}

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss'],
})
export class StageComponent {
  size$: Subject<Size> = new BehaviorSubject({ width: 50, height: 50 });
  coordinates$: Subject<Coordinates> = new BehaviorSubject({ x: 500, y: 500 });

  state$ = combineLatest([this.size$, this.coordinates$]).pipe(
    map(([size, coordinates]) => ({ size, coordinates }))
  );

  @HostListener('click', ['$event'])
  onClick($event: MouseEvent) {
    this.coordinates$.next({ x: $event.clientX, y: $event.clientY });
  }
}
