import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectedLabelComponent } from './expected-label.component';

describe('ExpectedLabelComponent', () => {
  let component: ExpectedLabelComponent;
  let fixture: ComponentFixture<ExpectedLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpectedLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpectedLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
