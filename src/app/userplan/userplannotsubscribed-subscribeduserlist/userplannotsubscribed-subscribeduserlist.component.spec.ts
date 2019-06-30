import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserplannotsubscribedSubscribeduserlistComponent } from './userplannotsubscribed-subscribeduserlist.component';

describe('UserplannotsubscribedSubscribeduserlistComponent', () => {
  let component: UserplannotsubscribedSubscribeduserlistComponent;
  let fixture: ComponentFixture<UserplannotsubscribedSubscribeduserlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserplannotsubscribedSubscribeduserlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserplannotsubscribedSubscribeduserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
