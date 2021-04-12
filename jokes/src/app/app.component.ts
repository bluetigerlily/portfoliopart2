import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jokes';

  update: boolean = false;
  joke: any;

constructor(update: SwUpdate, private data: DataService) {

  update.available.subscribe(event => {

    update.activateUpdate().then(()=> document.location.reload());

    // this.update = true;
     })
  }
ngOnInit() {
this.data.gimmeJokes().subscribe( res => {

  this.joke = res;

})

}

}
