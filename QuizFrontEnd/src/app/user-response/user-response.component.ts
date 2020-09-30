import { Component, OnInit } from '@angular/core';
import { SurveyData } from '../survey-data';

@Component({
  selector: 'app-user-response',
  templateUrl: './user-response.component.html',
  styleUrls: ['./user-response.component.css']
})
export class UserResponseComponent implements OnInit {

  surveys: SurveyData[]=[
    {idSurvey:1, titlesSurvey:'Fizica', expirationDateSurvey:new Date(),creationDateSurvey:new Date()},
    {idSurvey:2, titlesSurvey:'Matematica',expirationDateSurvey:new Date(),creationDateSurvey:new Date()},
    {idSurvey:3, titlesSurvey:'Engleza',expirationDateSurvey:new Date(),creationDateSurvey:new Date()},
    {idSurvey:4, titlesSurvey:'Franceza',expirationDateSurvey:new Date(),creationDateSurvey:new Date()}
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
