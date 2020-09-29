import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { QuizAddComponent } from './quiz-add/quiz-add.component';
import { SurveyAddComponent } from './survey-add/survey-add.component';


const routes: Routes = [
  {path:'survey-add',component: SurveyAddComponent},
  {path:'quiz-add', component:QuizAddComponent},
  {path:'', component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
