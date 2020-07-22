import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithIconsComponent } from './button-with-icons.component';

describe('ButtonWithIconsComponent', () => {
  let component: ButtonWithIconsComponent;
  let fixture: ComponentFixture<ButtonWithIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonWithIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWithIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
