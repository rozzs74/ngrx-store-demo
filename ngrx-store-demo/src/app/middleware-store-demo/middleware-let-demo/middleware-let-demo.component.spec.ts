import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlewareLetDemoComponent } from './middleware-let-demo.component';

describe('MiddlewareLetDemoComponent', () => {
  let component: MiddlewareLetDemoComponent;
  let fixture: ComponentFixture<MiddlewareLetDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddlewareLetDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddlewareLetDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
