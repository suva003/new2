import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofileinfoComponent } from './myprofileinfo.component';

describe('MyprofileinfoComponent', () => {
  let component: MyprofileinfoComponent;
  let fixture: ComponentFixture<MyprofileinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprofileinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprofileinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
