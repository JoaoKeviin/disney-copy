import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoMelhoresComponent } from './conteudo-melhores.component';

describe('ConteudoMelhoresComponent', () => {
  let component: ConteudoMelhoresComponent;
  let fixture: ComponentFixture<ConteudoMelhoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoMelhoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConteudoMelhoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
