import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyperformancesComponent } from './keyperformances.component';

describe('KeyperformancesComponent', () => {
  let component: KeyperformancesComponent;
  let fixture: ComponentFixture<KeyperformancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyperformancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyperformancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
