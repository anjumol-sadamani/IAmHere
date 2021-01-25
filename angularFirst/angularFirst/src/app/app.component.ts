import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application started';
  image = './assets/download.png';
  show = false;
  alert(){
    alert("alert box!!")
  }
}
