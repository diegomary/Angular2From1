// Component
import { Component,AfterViewInit } from '@angular/core';
import { FlowerService } from './flowerservice';

@Component({
  selector: 'app-root', //The entry point
  providers: [FlowerService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(private flowerservice: FlowerService) {}
  ngAfterViewInit() {
    // document ready
     this.timer = setInterval(() => { // fat arrow lexical scope preserved in typescript like ES6
        this.flowerservice.authenticate().subscribe(data => this.token = data);
     }, 3000);

     var playerInstance = jwplayer("jwplayercontainer");
     playerInstance.setup({
     "playlist": "playList.txt",   // renamed from json to txt because dmm888.com doesn't like json
     "height": 326,
     "width": 580,
     "key":"G1VjVx3NzbExARB/D0TFxwr4oC3ilweCL/dt3A==",
     "autostart": false});

  }

  title = 'app works!';
  jqueryversion = `This site is using Jquery ${$.fn.jquery}`;
  timer={}
  name = 'David';
  counter = 10;
  flowers = [];
  token = {};
  increment() { this.counter++; }
  decrement() { this.counter--; }
  loadFlowers() {
      this.flowerservice.getFlowers().subscribe(data => this.flowers = data);
    }
}
