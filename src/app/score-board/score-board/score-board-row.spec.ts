import { PlayerCell } from '../player-cell/player-cell';
import { Player } from '../../model/player';
import { ScoreBoardRow } from './score-board-row';

describe('ScoreBoardRow', () => {
  it('should create an instance', () => {
    expect(new ScoreBoardRow(Player.empty, PlayerCell.empty)).toBeTruthy();
  });
});
