import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducerReduxStlyeComponent } from './reducer-redux-stlye.component';

describe('ReducerReduxStlyeComponent', () => {
  let component: ReducerReduxStlyeComponent;
  let fixture: ComponentFixture<ReducerReduxStlyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReducerReduxStlyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReducerReduxStlyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
