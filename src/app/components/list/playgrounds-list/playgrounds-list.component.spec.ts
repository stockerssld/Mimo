import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundsListComponent } from './playgrounds-list.component';

describe('PlaygroundsListComponent', () => {
  let component: PlaygroundsListComponent;
  let fixture: ComponentFixture<PlaygroundsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
