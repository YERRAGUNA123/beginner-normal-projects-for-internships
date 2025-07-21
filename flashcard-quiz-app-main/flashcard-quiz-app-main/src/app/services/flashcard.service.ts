import { Injectable } from '@angular/core';
import { Flashcard } from '../models/flashcard.model';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private flashcards: Flashcard[] = [
    { question: 'What is Angular?', answer: 'A web application framework', isAnswered: false },
    { question: 'What is TypeScript?', answer: 'A superset of JavaScript', isAnswered: false },
    // Add more flashcards here
  ];

  getFlashcards(): Flashcard[] {
    return this.flashcards;
  }

  shuffleFlashcards(): void {
    this.flashcards.sort(() => Math.random() - 0.5);
  }
}
