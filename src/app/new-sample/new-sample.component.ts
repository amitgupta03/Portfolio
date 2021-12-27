import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-sample',
  templateUrl: './new-sample.component.html',
  styleUrls: ['./new-sample.component.scss'],
})
export class NewSampleComponent implements OnInit {
  recruits: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.getClient();
  }
  getClient() {
    this.recruits = [{"firstName": "Satyansh","lastName": "Srivastva", "age":"21", "position": "Software Engineer"},
    {"firstName": "Satyansh","lastName": "Srivastva", "age":"21", "position": "Software Engineer"},
    {"firstName": "Akash","lastName": "Singh", "age":"23", "position": "Software Engineer"},
    {"firstName": "Amit","lastName": "Gupta", "age":"24", "position": "Software Engineer"},
    {"firstName": "Nick","lastName": "Stosh", "age":"21", "position": "Software Engineer"},
    {"firstName": "Satyansh","lastName": "Rai", "age":"26", "position": "Software Engineer"},
    {"firstName": "Satyansh","lastName": "Negi", "age":"41", "position": "Software Engineer"},
    {"firstName": "Satyansh","lastName": "Srivastva", "age":"21", "position": "Software Engineer"}]
  }
  updateClient() {}
  signout() {}
}
