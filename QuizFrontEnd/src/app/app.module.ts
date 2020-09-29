import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionListComponent } from './option-list/option-list.component';
import { QuizAddComponent } from './quiz-add/quiz-add.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionListComponent,
    QuizAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
