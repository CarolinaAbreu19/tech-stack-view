import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  opcoes: string[];
  opcaoSelecionada = "-";
  exibirMenu = false;
  listaVazia = false;

  constructor() { }

  ngOnInit() {
    this.verificarExibicaoListaVazia();
  }

  verificarExibicaoListaVazia() {
    if(!this.opcoes) this.listaVazia = true;
  }

  showMenu() {
    this.exibirMenu = !this.exibirMenu;
  }

  selecionarOpcao(item: string) {
    if(!this.listaVazia) {
      this.opcaoSelecionada = item;
      this.exibirMenu = false;
    }
  }

}
