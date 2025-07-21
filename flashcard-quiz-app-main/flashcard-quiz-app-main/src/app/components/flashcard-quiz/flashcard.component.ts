import { Component, Input } from '@angular/core';
import { Flashcard } from '../../models/flashcard.model';


@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent {
  @Input() flashcard!: Flashcard;
  showAnswer: boolean = false;

  toggleAnswer(): void {
    this.showAnswer = !this.showAnswer;
    this.flashcard.isAnswered = this.showAnswer;
  }
}
