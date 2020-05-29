import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsCompactComponent } from './incidents-compact.component';

describe('IncidentsCompactComponent', () => {
  let component: IncidentsCompactComponent;
  let fixture: ComponentFixture<IncidentsCompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentsCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentsCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
