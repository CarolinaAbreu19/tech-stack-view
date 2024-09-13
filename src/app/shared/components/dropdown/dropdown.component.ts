import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChaveDescricaoDTO } from '../../dtos/chave-descricao.dto';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Output() opcaoSelecionadaEmit = new EventEmitter();

  opcoes: ChaveDescricaoDTO[];
  opcaoSelecionada = new ChaveDescricaoDTO();
  exibirMenu = false;
  listaVazia = false;

  constructor() { }

  ngOnInit() {
    this.opcaoSelecionada.descricao = "-";
    this.verificarExibicaoListaVazia();
  }

  verificarExibicaoListaVazia() {
    if(!this.opcoes) this.listaVazia = true;
  }

  showMenu() {
    this.exibirMenu = !this.exibirMenu;
  }

  selecionarOpcao(item: ChaveDescricaoDTO) {
    if(!this.listaVazia) {
      this.opcaoSelecionada = item;
      this.exibirMenu = false;

      this.opcaoSelecionadaEmit.emit(item);
    }
  }

}
