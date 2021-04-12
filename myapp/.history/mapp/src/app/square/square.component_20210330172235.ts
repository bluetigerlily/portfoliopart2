import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success">{{ value }}</button>
    <button nbButton hero status="info">{{}}
  `,
  styles: []
})
export class SquareComponent {
  @Input() value: 'X' | 'O' = "X";
}
