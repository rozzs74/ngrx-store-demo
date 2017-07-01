import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDispatcherComponent } from './subject-dispatcher.component';

describe('SubjectDispatcherComponent', () => {
  let component: SubjectDispatcherComponent;
  let fixture: ComponentFixture<SubjectDispatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectDispatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDispatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
