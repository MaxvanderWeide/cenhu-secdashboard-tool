import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdeskComponent } from './topdesk.component';

describe('TopdeskComponent', () => {
  let component: TopdeskComponent;
  let fixture: ComponentFixture<TopdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
