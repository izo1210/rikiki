import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundCellComponent } from './round-cell.component';

describe('RoundCellComponent', () => {
  let component: RoundCellComponent;
  let fixture: ComponentFixture<RoundCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
