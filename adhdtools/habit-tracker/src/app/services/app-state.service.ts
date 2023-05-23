import { Injectable, Signal, signal } from '@angular/core';
import Habit, { HabitType } from '../model/habit.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private readonly _habits = signal([
    new Habit("Habit 1", HabitType.DAILY),
    new Habit("Habit 2", HabitType.WEEKLY)
  ]);

  public get Habits(): Signal<Habit[]> {
    return this._habits;
  }

  public addHabit() {
    this._habits.mutate(habits => habits.push(new Habit()));
  }

  public deleteHabit(id: string) {
    
  }
}
