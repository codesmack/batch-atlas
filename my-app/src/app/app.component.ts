import { Component } from '@angular/core';

@Component({
  selector: 'app-startup',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'my-app ';
  totalStudents : number = 10;

  constructor(){
    
  }

  showInfo(){

  }
}
