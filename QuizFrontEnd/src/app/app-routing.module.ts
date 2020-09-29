import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationQuizORSurveyComponent } from './creation-quiz-survey/creation-quiz-survey.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuizAddComponent } from './quiz-addQuest/quiz-addQuest.component';
import { SurveyAddComponent } from './survey-addQuest/survey-addQuest.component';


const routes: Routes = [
  {path:'creation-QuizOrSurvey/survey-addQuest',component: SurveyAddComponent},
  {path:'creation-QuizOrSurvey/quiz-addQuest', component:QuizAddComponent},
  {path:'', component:HomePageComponent},  
  {path:'creation-QuizOrSurvey', component:CreationQuizORSurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
