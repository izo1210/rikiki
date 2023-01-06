import { Round } from '../round/round';
import { NumberButtons } from './number-buttons';

describe('NumberButtons', () => {
  it('should create an instance', () => {
    expect(new NumberButtons(Round.empty)).toBeTruthy();
  });
});
