import { GameStateHandler } from "../game-state-service/game-state-handler";
import { PlayerRound } from "../model/player-round";
import { ButtonState } from "./button-state";

export class NumberButtons {
    static readonly empty=new NumberButtons();

    readonly buttonStates: ButtonState[]=[];
    selectedClass: string="";

    constructor(gameState?: GameStateHandler)
    {
        if(gameState==null || gameState.empty || gameState.finished) return;
        
        const currentPlayerRound: PlayerRound=gameState.currentPlayer.getRound(gameState.currentRound.index);
        this.selectedClass=this.createSelectedClass(currentPlayerRound);
        this.fillButtonStates(currentPlayerRound, gameState);
    }

    isDisabled(value: number)
    {
        for(let buttonState of this.buttonStates)
        {
            if(buttonState.value===value) return buttonState.disabled;
        }
        return true;
    }

    private createSelectedClass(currentPlayerRound: PlayerRound): string
    {
        if(currentPlayerRound.expectedSelected) return "expected-selected";
        if(currentPlayerRound.actualSelected) return "actual-selected";
        return "";
    }

    private fillButtonStates(currentPlayerRound: PlayerRound, gameService: GameStateHandler): void
    {
        this.addButtonStates(gameService);
        this.disableButtonsForCardsInHand(gameService);
        if(currentPlayerRound.expectedSelected)
        {
            this.disableButtonForLastPlayerExpected(gameService);
        }
        else if(currentPlayerRound.actualSelected)
        {
            this.disableButtonsForActualState(gameService);
        }
    }

    private addButtonStates(gameService: GameStateHandler): void
    {
        for(let value=1; value<=gameService.maxCardsInHand; value++)
        {
            this.buttonStates.push(new ButtonState(value));
        }
        this.buttonStates.push(new ButtonState(0));
    }

    private disableButtonsForCardsInHand(gameService: GameStateHandler)
    {
        this.disableAbove(gameService.currentRound.cardsInHand);
    }

    private disableButtonForLastPlayerExpected(gameService: GameStateHandler)
    {
        if(gameService.currentPlayerIndex===gameService.currentRound.lastPlayerIndex)
        {
            const forbiddenNumber=gameService.currentRound.cardsInHand-gameService.currentRound.totalExpected;
            if(forbiddenNumber>=0)
            {
                this.disable(forbiddenNumber);
            }
        }
    }

    private disableButtonsForActualState(gameService: GameStateHandler)
    {
        const remaining=gameService.currentRound.cardsInHand-gameService.currentRound.totalActual;
        this.disableAbove(remaining);
        if(gameService.currentPlayerIndex===gameService.currentRound.lastPlayerIndex)
        {
            this.disableBelow(remaining);
        }
    }

    private disable(value: number)
    {
        this.buttonStates.forEach(buttonState=>{
            if(buttonState.value===value) buttonState.disabled=true;
        });
    }

    private disableBelow(value: number)
    {
        this.buttonStates.forEach(buttonState=>{
            if(buttonState.value<value) buttonState.disabled=true;
        });
    }

    private disableAbove(value: number)
    {
        this.buttonStates.forEach(buttonState=>{
            if(buttonState.value>value) buttonState.disabled=true;
        });
    }

}
