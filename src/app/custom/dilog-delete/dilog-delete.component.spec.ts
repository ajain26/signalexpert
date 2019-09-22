import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilogDeleteComponent } from './dilog-delete.component';

describe('DilogDeleteComponent', () => {
  let component: DilogDeleteComponent;
  let fixture: ComponentFixture<DilogDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilogDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
