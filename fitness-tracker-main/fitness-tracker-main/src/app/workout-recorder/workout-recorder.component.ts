import { Component } from '@angular/core';

@Component({
  selector: 'app-workout-recorder',
  templateUrl: './workout-recorder.component.html',
})
export class WorkoutRecorderComponent {
  workouts: { type: string; duration: number; date: Date }[] = [];
  workoutType: string;
  workoutDuration: number;

  recordWorkout() {
    this.workouts.push({
      type: this.workoutType,
      duration: this.workoutDuration,
      date: new Date(),
    });
    this.workoutType = '';
    this.workoutDuration = null;
  }
}
