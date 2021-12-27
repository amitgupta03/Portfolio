import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  single = [
    {
      "name": "Angular 2+",
      "value": 8940000
    },
    {
      "name": "AngularJS",
      "value": 5000000
    },
    {
      "name": "TypeScript",
      "value": 7200000
    },
    {
      "name": "JavaScript",
      "value": 8940000
    },
    {
      "name": "RxJs",
      "value": 5000000
    },
    {
      "name": "Angular Material",
      "value": 5000000
    },
    {
      "name": "jQuery",
      "value": 5000000
    },
    {
      "name": "Bootstrap",
      "value": 7200000
    },
    {
      "name": "HTML",
      "value": 7200000
    },
    {
      "name": "CSS",
      "value": 5940000
    },
    {
      "name": "git",
      "value": 5940000
    }
  ];
  
  showXAxis: boolean = false;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  yAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = '';

  colorScheme = {
    domain: ['#f37037', '#FF0000', '#808000', '#F1DC46','#06ECA8','#DA10AC']
  };

  constructor() {
    Object.assign(this, this.single );
  }


  ngOnInit(): void {}
}
