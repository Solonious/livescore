import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivescopeComponent } from './livescope.component';

describe('LivescopeComponent', () => {
  let component: LivescopeComponent;
  let fixture: ComponentFixture<LivescopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivescopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivescopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
