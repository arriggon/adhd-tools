import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitListComponent } from './components/habit-list/habit-list.component';

const routes: Routes = [
  { path: 'list', component: HabitListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
