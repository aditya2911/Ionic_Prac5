import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.page.html',
  styleUrls: ['./quiz-page.page.scss'],
})
export class QuizPagePage implements OnInit {

  currentQuestion: any;
  selectedAnswer: any;

  questions: any[] = [
    {
      question: 'What is the capital of France?',
      choices: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris'
    },
    {
      question: 'Which animal is known as the "King of the Jungle"?',
      choices: ['Lion', 'Elephant', 'Tiger', 'Giraffe'],
      answer: 'Lion'
    },
    // Add more questions here
  ];

  constructor() {
    this.currentQuestion = this.questions[0];
  }
  ngOnInit(): void {
  }

  checkAnswer() {
    // Logic to check the selected answer and proceed to the next question
  }

}
