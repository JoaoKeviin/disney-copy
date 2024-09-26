import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntasFrequenteComponent } from './perguntas-frequente.component';

describe('PerguntasFrequenteComponent', () => {
  let component: PerguntasFrequenteComponent;
  let fixture: ComponentFixture<PerguntasFrequenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerguntasFrequenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerguntasFrequenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
