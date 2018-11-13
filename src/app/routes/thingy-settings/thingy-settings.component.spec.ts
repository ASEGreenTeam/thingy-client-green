import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingySettingsComponent } from './thingy-settings.component';

describe('ThingySettingsComponent', () => {
  let component: ThingySettingsComponent;
  let fixture: ComponentFixture<ThingySettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingySettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
