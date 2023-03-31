import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Question {
  question: string;
  max: number;
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
  
  completed = false;
  submitbtn = false;
  textarea = false;
  answers: number[] = [];
  questions = [
    { question: 'How satisfied are you with our products?', max: 5 },
    { question: 'How fair are the prices compared to similar retailers?', max: 5 },
    { question: 'How satisfied are you with the value for money of your purchase?', max: 5 },
    { question: 'On a scale of 1-10 how would you recommend us to your friends and family?', max: 10 },
    { question: 'What could we do to improve our service?', max: 0 }
  ];
  num = 0;

  constructor(private http: HttpClient) {}
  
  ngOnInit() {}
  
  

  previous() {
    if (this.num > 0) {
      this.num--;
      if (this.num < this.questions.length - 1) {
        this.submitbtn = false;
      }
    }
  }

  next() {
    if (this.num < this.questions.length - 1) {
      this.num++;
      if (this.num == this.questions.length - 1) {
        this.textarea=true;
        this.submitbtn = true;
      }
    }
  }

  submit() {
    const surveyAnswers = { 
      questions: this.questions.map((q, i) => ({ question: q.question, star: this.answers[i] })),
      completed: true
    };
    this.http.post('http://localhost:3000/survey', surveyAnswers).subscribe(
      res => {
        console.log(res);
        this.completed=true;
        return res;
      }
    );
  }
  
  
}