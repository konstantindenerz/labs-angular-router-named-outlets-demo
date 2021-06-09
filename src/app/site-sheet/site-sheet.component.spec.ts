import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSheetComponent } from './site-sheet.component';

describe('SiteSheetComponent', () => {
  let component: SiteSheetComponent;
  let fixture: ComponentFixture<SiteSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
