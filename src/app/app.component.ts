import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projeto-diretiva';
  textoBotao = 'Esconder';
  esconder = false;

  alterarExibicao() {
    this.textoBotao = this.esconder ? 'Esconder' : 'Exibir';
    this.esconder = !this.esconder;
  }
  
  contador(){
    var cont = 0;
  cont ++;
  return cont;
  }
  
  pessoas = [
      
    { numero: this.contador(),nome: 'José', idade: 18 , cidade:'São Paulo', estado:'São Paulo'},
    { nome: 'Maria', idade: 22, cidade:'Rio de Janeiro', estado:'Rio de Janeiro' },
    { nome: 'Elcio', idade: 51, cidade:'Belo Horizonte', estado:'Minas Gerais' },
    { nome: 'Mario', idade: 35, cidade:'Vitória', estado:'Espírito Santo' },
    { nome: 'Nelson', idade: 12, cidade:'Curitiba', estado:'Paraná' },
  ];
  
  pegarCor(idade){
    return idade>= 30 ? "red": "blue";
  }
}
