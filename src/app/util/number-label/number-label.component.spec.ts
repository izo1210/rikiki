import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberLabelComponent } from './number-label.component';

describe('NumberLabelComponent', () => {
  let component: NumberLabelComponent;
  let fixture: ComponentFixture<NumberLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
