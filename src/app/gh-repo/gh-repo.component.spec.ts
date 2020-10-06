import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhRepoComponent } from './gh-repo.component';

describe('GhRepoComponent', () => {
  let component: GhRepoComponent;
  let fixture: ComponentFixture<GhRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
