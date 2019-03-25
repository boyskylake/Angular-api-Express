import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSqlComponent } from './all-sql.component';

describe('AllSqlComponent', () => {
  let component: AllSqlComponent;
  let fixture: ComponentFixture<AllSqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
