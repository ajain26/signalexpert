import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilogSubscribeComponent } from './dilog-subscribe.component';

describe('DilogSubscribeComponent', () => {
  let component: DilogSubscribeComponent;
  let fixture: ComponentFixture<DilogSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilogSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilogSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
