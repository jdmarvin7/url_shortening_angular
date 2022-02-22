import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenLinkUiComponent } from './shorten-link-ui.component';

describe('ShortenLinkUiComponent', () => {
  let component: ShortenLinkUiComponent;
  let fixture: ComponentFixture<ShortenLinkUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortenLinkUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenLinkUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
