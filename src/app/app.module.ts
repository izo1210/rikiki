//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
//Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
//App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//AppComponents
import { NewGameComponent } from './new-game/new-game.component';
import { GameStateComponent } from './game-state/game-state.component';
import { NumberButtonsComponent } from './number-buttons/number-buttons.component';
import { ScoreBoardComponent } from './score-board/score-board/score-board.component';
import { PlayerCellComponent } from './score-board/player-cell/player-cell.component';
import { RoundCellComponent } from './score-board/round-cell/round-cell.component';
import { PlayerLabelComponent } from './score-board/player-label/player-label.component';
import { ScoreLabelComponent } from './score-board/score-label/score-label.component';
import { RankLabelComponent } from './score-board/rank-label/rank-label.component';
import { ExpectedLabelComponent } from './score-board/expected-label/expected-label.component';
import { ActualLabelComponent } from './score-board/actual-label/actual-label.component';
import { RoundLabelComponent } from './score-board/round-label/round-label.component';
import { NumberLabelComponent } from './util/number-label/number-label.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ConfirmDialogComponent } from './new-game/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    //App
    AppComponent,
    //AppComponents
    NewGameComponent,
    GameStateComponent,
    NumberButtonsComponent,
    ScoreBoardComponent,
    PlayerCellComponent,
    RoundCellComponent,
    PlayerLabelComponent,
    ScoreLabelComponent,
    RankLabelComponent,
    ExpectedLabelComponent,
    ActualLabelComponent,
    RoundLabelComponent,
    NumberLabelComponent,
    ToolbarComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    //Angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    //Material
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
