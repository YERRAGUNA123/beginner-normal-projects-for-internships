import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutRecorderComponent } from './workout-recorder/workout-recorder.component';
import { GoalsTrackerComponent } from './goals-tracker/goals-tracker.component';
import { ProgressViewerComponent } from './progress-viewer/progress-viewer.component';

const routes: Routes = [
  { path: 'record-workout', component: WorkoutRecorderComponent },
  { path: 'set-goals', component: GoalsTrackerComponent },
  { path: 'view-progress', component: ProgressViewerComponent },
  { path: '', redirectTo: '/record-workout', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
