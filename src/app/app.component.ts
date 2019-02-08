import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;

  constructor(){
    this.name = 'Owen'
    this.changeName('name has changed')
  }

   changeName(name:string):void{
    this.name = name;
  }
}
  