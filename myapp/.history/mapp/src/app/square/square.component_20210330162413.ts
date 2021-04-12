import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      
    </p>
  `,
  styles: [
  ]
})
export class SquareComponent {

rando;

constructor() {
  setInterval(() => this.rando = Math.random(), 500);
}

}
