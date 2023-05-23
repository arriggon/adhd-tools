import { Component, computed } from '@angular/core';
import Habit from 'src/app/model/habit.model';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.scss']
})
export class HabitListComponent {
  habitTypes = ['Daily','Weekly','Monthly'];

  habits: Habit[] = this.appState.Habits();

  constructor(private appState: AppStateService) {
  }

  addHabit() {
    this.appState.addHabit();
  }

  deleteHabit(id: string) {
    this.appState.deleteHabit(id);
  }
}
