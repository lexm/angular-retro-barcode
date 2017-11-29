import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colors = [];
  
  constructor() {}

  ngOnInit() {
    // this.title = 'Retro Barcode Generator';
    for(let i = 0; i < 10; i++) {
      let newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      this.colors.push(newColor);
    }
  }
}