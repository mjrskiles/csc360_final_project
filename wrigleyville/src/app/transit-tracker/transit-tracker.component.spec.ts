import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitTrackerComponent } from './transit-tracker.component';

describe('TransitTrackerComponent', () => {
  let component: TransitTrackerComponent;
  let fixture: ComponentFixture<TransitTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
