import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IncidentsOverviewComponent} from './incidents.component';

describe('IncidentsOverviewComponent', () => {
  let component: IncidentsOverviewComponent;
  let fixture: ComponentFixture<IncidentsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IncidentsOverviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
