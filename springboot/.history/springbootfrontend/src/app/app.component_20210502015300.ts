import { Component } from '@angular/core';
import { Student }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'springbootfrontend';
  public students: Student[];


}
