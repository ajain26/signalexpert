import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilogUpdateserviceComponent } from './dilog-updateservice.component';

describe('DilogUpdateserviceComponent', () => {
  let component: DilogUpdateserviceComponent;
  let fixture: ComponentFixture<DilogUpdateserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilogUpdateserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilogUpdateserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
