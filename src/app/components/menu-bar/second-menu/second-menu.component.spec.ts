import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMenuComponent } from './second-menu.component';

describe('SecondMenuComponent', () => {
  let component: SecondMenuComponent;
  let fixture: ComponentFixture<SecondMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondMenuComponent]
    });
    fixture = TestBed.createComponent(SecondMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
