import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <but
  `,
  styles: []
})
export class SquareComponent {
  @Input() value: 'X' | 'O' = "X";
}
