import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizData } from './quiz-data';





@Injectable({
  // folosit pentru a injecta clasa curenta in alta clasa 
  providedIn: 'root'
})



export class QuizService {
//il folosesc pentru toate metodele mele care au referire la quiz din aplicatia java(QuizController) 
// cate un service pentru fiecare controller din aplicatie
  constructor(private httpClient:HttpClient) { }


  public getQuizes():Observable<QuizData[]>{
    return this.httpClient.get<QuizData[]>('http://localhost:8080/getQuizes');
  }
}
