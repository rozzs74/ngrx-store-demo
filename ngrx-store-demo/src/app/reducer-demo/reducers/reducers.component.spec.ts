import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducersComponent } from './reducers.component';

describe('ReducersComponent', () => {
  let component: ReducersComponent;
  let fixture: ComponentFixture<ReducersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReducersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReducersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
