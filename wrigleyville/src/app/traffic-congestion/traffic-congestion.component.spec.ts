import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficCongestionComponent } from './traffic-congestion.component';

describe('TrafficCongestionComponent', () => {
  let component: TrafficCongestionComponent;
  let fixture: ComponentFixture<TrafficCongestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficCongestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficCongestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
