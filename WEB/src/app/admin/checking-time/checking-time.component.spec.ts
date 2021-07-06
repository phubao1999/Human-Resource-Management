import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingTimeComponent } from './checking-time.component';

describe('CheckingTimeComponent', () => {
  let component: CheckingTimeComponent;
  let fixture: ComponentFixture<CheckingTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckingTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
