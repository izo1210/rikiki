import { Component, Input } from '@angular/core';
import { Round } from '../../game-state-service/round';

@Component({
  selector: 'app-round-label',
  templateUrl: './round-label.component.html',
  styleUrls: ['./round-label.component.sass']
})
export class RoundLabelComponent {
  @Input() model: Round=Round.empty;
  @Input() selected: boolean=false;
}
