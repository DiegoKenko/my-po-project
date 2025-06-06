import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseContaComponent } from './conta.browse.component';

describe('BrowseContaComponent', () => {
  let component: BrowseContaComponent;
  let fixture: ComponentFixture<BrowseContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
