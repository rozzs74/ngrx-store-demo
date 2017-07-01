import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanDemoComponent } from './scan-demo.component';

describe('ScanDemoComponent', () => {
  let component: ScanDemoComponent;
  let fixture: ComponentFixture<ScanDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
