import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserplannotapprooveFreetrailComponent } from './userplannotapproove-freetrail.component';

describe('UserplannotapprooveFreetrailComponent', () => {
  let component: UserplannotapprooveFreetrailComponent;
  let fixture: ComponentFixture<UserplannotapprooveFreetrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserplannotapprooveFreetrailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserplannotapprooveFreetrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
