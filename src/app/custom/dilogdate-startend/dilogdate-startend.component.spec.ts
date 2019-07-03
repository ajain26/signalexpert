import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilogdateStartendComponent } from './dilogdate-startend.component';

describe('DilogdateStartendComponent', () => {
  let component: DilogdateStartendComponent;
  let fixture: ComponentFixture<DilogdateStartendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilogdateStartendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilogdateStartendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
