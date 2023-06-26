import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltDirectivesComponent } from './built-directives.component';

describe('BuiltDirectivesComponent', () => {
  let component: BuiltDirectivesComponent;
  let fixture: ComponentFixture<BuiltDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuiltDirectivesComponent]
    });
    fixture = TestBed.createComponent(BuiltDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
