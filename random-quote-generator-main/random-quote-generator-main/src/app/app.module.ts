import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QuoteComponent } from './quote/quote.component'; // Ensure this is correct

@NgModule({
  declarations: [
    QuoteComponent, // Ensure your QuoteComponent is declared here
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [QuoteComponent], // Make sure AppComponent is bootstrapped
})
export class AppModule {}
