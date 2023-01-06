import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankLabelComponent } from './rank-label.component';

describe('RankLabelComponent', () => {
  let component: RankLabelComponent;
  let fixture: ComponentFixture<RankLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
