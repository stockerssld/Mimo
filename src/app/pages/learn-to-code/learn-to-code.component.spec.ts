import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnToCodeComponent } from './learn-to-code.component';

describe('LearnToCodeComponent', () => {
  let component: LearnToCodeComponent;
  let fixture: ComponentFixture<LearnToCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnToCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnToCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
