import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ChaveDescricaoDTO } from '../../dtos/chave-descricao.dto';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() opcoes: ChaveDescricaoDTO[];
  @Output() opcaoSelecionadaEmit = new EventEmitter();

  opcaoSelecionada = new ChaveDescricaoDTO();
  exibirMenu = false;
  listaVazia = false;

  constructor() { }

  ngOnInit() {
    this.opcaoSelecionada.descricao = "-";
    this.verificarExibicaoListaVazia();
  }

  verificarExibicaoListaVazia() {
    if(!this.opcoes || this.opcoes.length === 0) {
      this.listaVazia = true;
    }
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
