import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private quotes: string[] = [
    'The only limit to our realization of tomorrow is our doubts of today.',
    'The best way to predict the future is to invent it.',
    'Life is 10% what happens to us and 90% how we react to it.',
    'Do not wait to strike till the iron is hot; but make it hot by striking.',
    'Whether you think you can or think you can’t, you’re right.',
    'The best revenge is massive success.',
    'The only way to do great work is to love what you do.',
  ];

  getRandomQuote(): string {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }
}
