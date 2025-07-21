import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../../services/flashcard.service';
import { Flashcard } from '../../models/flashcard.model';  

@Component({
  selector: 'app-flashcard-quiz',
  templateUrl: './flashcard-quiz.component.html',
  styleUrls: ['./flashcard-quiz.component.css']
})
export class FlashcardQuizComponent implements OnInit {
  flashcards: Flashcard[] = [];
  currentFlashcardIndex: number = 0;

  constructor(private flashcardService: FlashcardService) {}

  ngOnInit(): void {
    this.flashcards = this.flashcardService.getFlashcards();
    this.flashcardService.shuffleFlashcards();
  }

  nextFlashcard(): void {
    if (this.currentFlashcardIndex < this.flashcards.length - 1) {
      this.currentFlashcardIndex++;
    }
  }

  previousFlashcard(): void {
    if (this.currentFlashcardIndex > 0) {
      this.currentFlashcardIndex--;
    }
  }

  
}
