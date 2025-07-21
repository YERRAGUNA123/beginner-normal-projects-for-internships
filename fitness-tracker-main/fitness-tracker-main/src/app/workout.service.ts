import { Injectable } from '@angular/core';

export interface Workout {
  type: string;
  duration: number;
  date: Date;
}

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private workouts: Workout[] = [];

  addWorkout(workout: Workout) {
    this.workouts.push(workout);
  }

  getWorkouts(): Workout[] {
    return this.workouts;
  }

  getTotalDuration(): number {
    return this.workouts.reduce((total, workout) => total + workout.duration, 0);
  }
}
