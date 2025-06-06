import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTESComponent } from './tes.browse.component';

describe('BrowseTESComponent', () => {
  let component: BrowseTESComponent;
  let fixture: ComponentFixture<BrowseTESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseTESComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseTESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
