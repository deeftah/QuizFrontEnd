import { Component, OnInit } from '@angular/core';
import { QuizData } from '../quiz-data';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-addQuest',
  templateUrl: './quiz-addQuest.component.html',
  styleUrls: ['./quiz-addQuest.component.css']
})





export class QuizAddComponent implements OnInit {
  quizes: QuizData[]=[]

  constructor(private quizService:QuizService) { }

  ngOnInit(): void {

    this.quizService.getQuizes().subscribe(receivedQuizes=>{
      this.quizes=receivedQuizes; 
    });
  }

}
