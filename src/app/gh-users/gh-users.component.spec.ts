import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhUsersComponent } from './gh-users.component';

describe('GhUsersComponent', () => {
  let component: GhUsersComponent;
  let fixture: ComponentFixture<GhUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
