import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyAddComponent } from './survey-addQuest/survey-addQuest.component';
import { QuizAddComponent } from './quiz-addQuest/quiz-addQuest.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreationQuizORSurveyComponent } from './creation-quiz-survey/creation-quiz-survey.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserResponseComponent } from './user-response/user-response.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyAddComponent,
    QuizAddComponent,
    HomePageComponent,
    CreationQuizORSurveyComponent,
    UserResponseComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
