import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutRecorderComponent } from './workout-recorder/workout-recorder.component';
import { GoalsTrackerComponent } from './goals-tracker/goals-tracker.component';
import { ProgressViewerComponent } from './progress-viewer/progress-viewer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutRecorderComponent,
    GoalsTrackerComponent,
    ProgressViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // You still need FormsModule for template-driven forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
