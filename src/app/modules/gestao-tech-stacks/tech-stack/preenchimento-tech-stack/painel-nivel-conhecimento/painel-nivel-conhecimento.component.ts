import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NivelConhecimentoEnumList } from 'src/app/shared/enums/nivel-conhecimento.enum';

@Component({
  selector: 'app-painel-nivel-conhecimento',
  templateUrl: './painel-nivel-conhecimento.component.html',
  styleUrls: ['./painel-nivel-conhecimento.component.scss']
})
export class PainelNivelConhecimentoComponent implements OnInit {
  @Output() nivelSelecionadoEmitter = new EventEmitter();
  @Input() assuntoPreenchido: boolean = false;

  nivelConhecimentoEnumList = new NivelConhecimentoEnumList().getAll();
  nivelConhecimentoCores = ['var(--gray-light)', 'var(--blue)', 'var(--blue-light-btn)', 'var(--green)', 'var(--yellow)', 'var(--orange-light)'];
  opcaoSelecionada: number;

  constructor() { }

  ngOnInit() {
  }

  selecionarNivelConhecimento(item) {
      this.opcaoSelecionada = item;
      this.nivelSelecionadoEmitter.emit(item);
  }

}
