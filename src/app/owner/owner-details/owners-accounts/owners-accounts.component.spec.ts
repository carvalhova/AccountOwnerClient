import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersAccountsComponent } from './owners-accounts.component';

describe('OwnersAccountsComponent', () => {
  let component: OwnersAccountsComponent;
  let fixture: ComponentFixture<OwnersAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnersAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
