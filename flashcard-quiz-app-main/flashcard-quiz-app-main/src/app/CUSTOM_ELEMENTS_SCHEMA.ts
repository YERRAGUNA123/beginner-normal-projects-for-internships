import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlashcardQuizComponent } from './components/flashcard-quiz/flashcard-quiz.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';

@NgModule({
  declarations: [
    FlashcardQuizComponent,
    FlashcardComponent
  ],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Add this only if using custom elements
})
export class AppModule {}
