import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameStateComponent } from './game-state/game-state.component';
import { NewGameComponent } from './new-game/new-game.component';

const routes: Routes = [
  { path: '', redirectTo: 'play-game', pathMatch: 'full' },
  { path: 'new-game', component: NewGameComponent },
  { path: 'play-game', component: GameStateComponent },
  { path: '**', redirectTo: 'play-game' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
