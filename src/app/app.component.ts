import { Component } from '@angular/core';
import { FlowerService } from './flowerservice';

@Component({
  selector: 'app-root', //The entry point
  providers: [FlowerService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private flowerservice: FlowerService) {}
  title = 'app works!';
  name = 'David';
  counter = 10;
  flowers = {};
  increment() { this.counter++; }
  decrement() { this.counter--; }
  loadFlowers() {
      this.flowerservice.getFlowers().subscribe(data => this.flowers = data);
    }
}
