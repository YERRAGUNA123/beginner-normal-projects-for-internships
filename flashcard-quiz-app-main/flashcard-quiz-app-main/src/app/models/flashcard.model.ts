export interface Flashcard {
  question: string;
  answer: string;
  isAnswered?: boolean; // Optional property to track if the flashcard has been answered
}
