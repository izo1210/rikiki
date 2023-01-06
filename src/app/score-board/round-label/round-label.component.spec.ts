import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundLabelComponent } from './round-label.component';

describe('RoundLabelComponent', () => {
  let component: RoundLabelComponent;
  let fixture: ComponentFixture<RoundLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
