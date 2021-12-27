import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  title = 'Portfolio';
  showloader:boolean = true; 
  
  ngOnInit(): void {
    setTimeout(() => {
      this.showloader = false;
    },5000)
  }
 
}
