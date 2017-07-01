import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterNonStoreComponent } from './counter-non-store.component';

describe('CounterNonStoreComponent', () => {
  let component: CounterNonStoreComponent;
  let fixture: ComponentFixture<CounterNonStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterNonStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterNonStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
