// app.module.ts (or any feature module that contains FlashcardQuizComponent)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlashcardQuizComponent } from './components/flashcard-quiz/flashcard-quiz.component';
import { FlashcardComponent } from './components/flashcard-quiz/flashcard.component';  // Ensure correct path

@NgModule({
  declarations: [
    FlashcardQuizComponent,
    FlashcardComponent  // Add this here to make it recognized
  ],
  imports: [BrowserModule],
  bootstrap: [FlashcardQuizComponent]
})
export class AppModule {}
