import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCCComponent } from './cc.browse.component';

describe('BrowseCCComponent', () => {
  let component: BrowseCCComponent;
  let fixture: ComponentFixture<BrowseCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseCCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
