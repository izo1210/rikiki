import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualLabelComponent } from './actual-label.component';

describe('ActualLabelComponent', () => {
  let component: ActualLabelComponent;
  let fixture: ComponentFixture<ActualLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
