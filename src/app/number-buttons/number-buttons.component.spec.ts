import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberButtonsComponent } from './number-buttons.component';

describe('NumberButtonsComponent', () => {
  let component: NumberButtonsComponent;
  let fixture: ComponentFixture<NumberButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
