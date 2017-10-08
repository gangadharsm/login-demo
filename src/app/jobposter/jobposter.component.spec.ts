import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobposterComponent } from './jobposter.component';

describe('JobposterComponent', () => {
  let component: JobposterComponent;
  let fixture: ComponentFixture<JobposterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobposterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobposterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
