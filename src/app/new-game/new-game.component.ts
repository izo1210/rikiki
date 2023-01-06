import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GameStateService } from '../game-state-service/game-state.service';
import { Player } from '../model/player';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.sass']
})
export class NewGameComponent implements OnInit {
  @ViewChild("nameInput") nameInput!: ElementRef;
  @ViewChild("nameModel") nameModel!: NgModel;
  error: string|null="Teszt hiba123";
  name: string="";
  players: Player[]=[];

  constructor(
    public gameService: GameStateService,
    public dialog: MatDialog,
  ) 
  {
  }

  ngOnInit(): void {
    this.players=[];
    this.gameService.players.forEach(player=>this.addPlayer(player.name));
  }

  private addPlayer(newName: string)
  {
    const newPlayer=new Player();
    newPlayer.name=newName;
    this.players.push(newPlayer);
  }

  get nameIsBlank(): boolean
  {
    return this.name!="" && this.name.trim()==="";
  }

  get nameExists(): boolean
  {
    return this.players.some(player=>player.name.toLocaleLowerCase()===this.name.trim().toLocaleLowerCase());
  }

  get maxPlayersLengthReached(): boolean
  {
    return this.players.length>=10;
  }

  focusNameInput()
  {
    const input: HTMLInputElement=this.nameInput?.nativeElement;
    if(!input) return;
    setTimeout(()=>{
      input.focus();
      input.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 100);
  }

  onNameKeyUp(event: KeyboardEvent)
  {
    console.log("onNameKeyUp", event);
    if(event.code==="Enter") this.onClickAddPlayer();
    if(event.code==="Delete") this.onClickRemoveLastPlayer();
  }

  get addPlayerDisabled(): boolean
  {
    if(!this.nameModel || this.nameModel.invalid) return true;
    if(this.nameIsBlank) return true;
    if(this.nameExists) return true;
    if(this.maxPlayersLengthReached) return true;
    return false;
  }

  onClickAddPlayer()
  {
    if(this.addPlayerDisabled) return;
    this.addPlayer(this.name.trim());
    this.name="";
    this.focusNameInput();
  }

  get removeLastPlayerDisabled(): boolean
  {
    return this.players.length===0;
  }

  onClickRemoveLastPlayer()
  {
    if(this.removeLastPlayerDisabled) return;
    this.name=this.players.pop()?.name || "";
    //this.focusNameInput();
  }

  get rotatePlayersDisabled(): boolean
  {
    return this.players.length<2;
  }

  onClickRotatePlayers()
  {
    if(this.rotatePlayersDisabled) return;
    const firstPlayer=this.players.shift();
    if(firstPlayer)
    {
      this.players.push(firstPlayer);
    }
    //this.focusNameInput();
  }

  get startGameDisabled(): boolean
  {
    return this.players.length<2;
  }

  onClickStartGame()
  {
    if(this.startGameDisabled) return;
    this.dialog.open(ConfirmDialogComponent).afterClosed().subscribe(confirmed=>{
      this.gameService.startNewGame(this.players, confirmed);
    });
  }

  onClickBack()
  {
    this.gameService.navigateToPlay();
  }


}

