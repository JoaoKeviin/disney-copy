import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OndeQuiserComponent } from './onde-quiser.component';

describe('OndeQuiserComponent', () => {
  let component: OndeQuiserComponent;
  let fixture: ComponentFixture<OndeQuiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OndeQuiserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OndeQuiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
