import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDispatcherComponent } from './store-dispatcher.component';

describe('StoreDispatcherComponent', () => {
  let component: StoreDispatcherComponent;
  let fixture: ComponentFixture<StoreDispatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDispatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDispatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
