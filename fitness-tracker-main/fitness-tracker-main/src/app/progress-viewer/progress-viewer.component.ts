import { Component } from '@angular/core';
import { WorkoutService, Workout } from '../workout.service';

@Component({
  selector: 'app-progress-viewer',
  templateUrl: './progress-viewer.component.html',
})
export class ProgressViewerComponent {
  workouts: Workout[] = [];

  constructor(private workoutService: WorkoutService) {
    this.workouts = this.workoutService.getWorkouts();
  }

  getTotalDuration(): number {
    return this.workoutService.getTotalDuration();
  }
}
