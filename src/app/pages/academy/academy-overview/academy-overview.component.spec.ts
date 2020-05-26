import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyOverviewComponent } from './academy-overview.component';

describe('AcademyOverviewComponent', () => {
  let component: AcademyOverviewComponent;
  let fixture: ComponentFixture<AcademyOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
