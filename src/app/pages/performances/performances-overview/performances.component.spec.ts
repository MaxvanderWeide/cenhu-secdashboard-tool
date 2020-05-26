import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PerformancesOverviewComponent} from '@pages/performances/performances-overview/performances.component';


describe('KeyperformancesComponent', () => {
  let component: PerformancesOverviewComponent;
  let fixture: ComponentFixture<PerformancesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PerformancesOverviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformancesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
