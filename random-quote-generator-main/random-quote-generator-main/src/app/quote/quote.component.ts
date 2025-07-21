import { Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service'; // Make sure this import is correct

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quote: string = '';

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.generateQuote(); // Generate an initial quote
  }

  generateQuote(): void {
    this.quote = this.quoteService.getRandomQuote();
  }

  shareQuote(): void {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      this.quote
    )}`;
    window.open(tweetUrl, '_blank');
  }
}
