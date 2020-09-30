import { Component, OnInit } from '@angular/core';
import { QuizData } from '../quiz-data'
import { SurveyData } from '../survey-data'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})



export class HomePageComponent implements OnInit {
//if selection/OptionType was quiz get quiz from DB
quizes: QuizData[]=[
  {idQuiz:1, descriptionQuiz:'...', expirationDateQuiz:new Date(),creationDateQuiz:new Date()},
  {idQuiz:2, descriptionQuiz:'...',expirationDateQuiz:new Date(),creationDateQuiz:new Date()},
  {idQuiz:3, descriptionQuiz:'..',expirationDateQuiz:new Date(),creationDateQuiz:new Date()},
  {idQuiz:4, descriptionQuiz:'..',expirationDateQuiz:new Date(),creationDateQuiz:new Date()}
  
]

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
