import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor() { }
  flyoutData: any = []
  ngOnInit(): void {
  }

  open(content: any) {
    if (content === 'globallogic') {
      this.flyoutData = [{
        "header": "Zipari Provider Portal",
        "pr_line_1": `Worked for US based Zipari is a customer experience platform 
      developed specifically for health insurance.The customer 
      experience platform provides deep analytics and real- time 
      recommendations to optimize the consumer experience and 
      improve customer satisfaction in the healthcare industry.`,
        "pr_line_2": "Directly working with client.",
        "pr_line_3": "Unit testing and Bug Fixes.",
        "pr_line_4": "Agile software Development."
      }];
    } else if (content === 'digispice') {
      this.flyoutData = [{
        "header": "Korero Platfroms",
        "pr_line_1": `Development the Front end of Korero Platform from 
      FRS using typescript, Angular 7+, Angular material, HTML, CSS etc.`,
        "pr_line_2": "Unit testing of developed modules.",
        "pr_line_3": "Resolving JIRA bugs and Debugging",
        "pr_line_4": " API integration etc."
      },
      {
        "header": "KMP",
        "pr_line_1": `Build DiGiSPICE's Social Collaboration Platefrom using typescript, Angular 7+, Angular material, HTML, CSS etc.`,
        "pr_line_2": "Unit testing of developed modules.",
        "pr_line_3": "Resolving JIRA bugs and Debugging",
        "pr_line_4": " API integration etc."
      },
      {
        "header": "ADHIKARI WEB APP",
        "pr_line_1": `Spice Money’s Adhikari Mobile App is a one-stop solution for all Banking and payment-related services that include Money Transfer, Cash withdrawal - Mini ATM (Aadhaar based), Cash withdrawal, Micro ATM (debit card), Cash Deposit, Bill payments, etc.`,
        "pr_line_2": "Unit testing of developed modules.",
        "pr_line_3": "Resolving JIRA bugs and Debugging",
        "pr_line_4": " API integration etc."
      }];
    } else {
      this.flyoutData = [{
        "header": "UMANG",
        "pr_line_1": `Worked on one of the flagship projects of NEGD – UMANG (The Unified 
        Mobile Application for New-age Governance)`,
        "pr_line_2": `Development the Front end of UMANG Department from FRS 
      using JavaScript, AngularJS, AngularJS material, HTML, CSS etc.`,
        "pr_line_3": `Data Sanity on Mp-ECOP, eVahan, mzE-District and various 
      Departments.`,
        "pr_line_4": " API integration etc."
      }];
    }
  }
}
