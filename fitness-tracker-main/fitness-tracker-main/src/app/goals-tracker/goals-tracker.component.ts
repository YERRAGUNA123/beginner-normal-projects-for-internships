import { Component } from '@angular/core';

@Component({
  selector: 'app-goals-tracker',
  templateUrl: './goals-tracker.component.html',
})
export class GoalsTrackerComponent {
  goals: { type: string; target: number }[] = [];
  goalType: string;
  goalTarget: number;

  addGoal() {
    this.goals.push({ type: this.goalType, target: this.goalTarget });
    this.goalType = '';
    this.goalTarget = null;
  }
}
