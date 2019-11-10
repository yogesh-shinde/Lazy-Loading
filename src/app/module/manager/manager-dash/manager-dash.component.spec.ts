import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDashComponent } from './manager-dash.component';

describe('ManagerDashComponent', () => {
  let component: ManagerDashComponent;
  let fixture: ComponentFixture<ManagerDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
