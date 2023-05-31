import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'AulasAngular01';
  nomes = [
    new Pessoa(1, 'Paulo,', 40),
    new Pessoa(2, 'Adriele,', 34),
    new Pessoa(3, 'tonhe,', 64),
    new Pessoa(4, 'Raimundo,', 65),
    new Pessoa(4, 'NANAN,', 64),
    
];


nomePrincipal = this.nomes[0];
  
}
