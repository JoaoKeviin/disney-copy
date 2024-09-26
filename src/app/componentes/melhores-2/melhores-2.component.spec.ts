import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Melhores2Component } from './melhores-2.component';

describe('Melhores2Component', () => {
  let component: Melhores2Component;
  let fixture: ComponentFixture<Melhores2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Melhores2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Melhores2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
