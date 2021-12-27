import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    
  }

  getID(event: any) {
    event.scrollIntoView({behavior: 'smooth'});
  }
}
