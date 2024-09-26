import { Component } from '@angular/core';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ConteudoMelhoresComponent } from './componentes/conteudo-melhores/conteudo-melhores.component';
import { PlanoComponent } from './componentes/plano/plano.component';
import { Melhores2Component } from './componentes/melhores-2/melhores-2.component';
import { OndeQuiserComponent } from './componentes/onde-quiser/onde-quiser.component';
import { PerguntasFrequenteComponent } from './componentes/perguntas-frequente/perguntas-frequente.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[FooterComponent, PerguntasFrequenteComponent, OndeQuiserComponent, Melhores2Component, PlanoComponent, ConteudoMelhoresComponent, CabecalhoComponent, InicioComponent, CommonModule, RouterOutlet],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
