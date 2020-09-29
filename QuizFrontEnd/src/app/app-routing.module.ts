import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptionListComponent } from './option-list/option-list.component';
import { QuizAddComponent } from './quiz-add/quiz-add.component';


const routes: Routes = [
  {path:' ',component: OptionListComponent},
  {path:'quiz-add', component:QuizAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
