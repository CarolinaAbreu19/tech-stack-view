import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChaveDescricaoDTO } from 'src/app/shared/dtos/chave-descricao.dto';
import { InformacoesTechStackDTO } from 'src/app/shared/dtos/informacoes-tech-stack.dto';
import { TipoConhecimentoEnum } from 'src/app/shared/enums/tipo-conhecimento.enum';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() informacoesTechStack: InformacoesTechStackDTO;
  @Output() obterDetalhesTechStackEmitter = new EventEmitter();

  abaSelecionada: string;
  tipoConhecimentoEnum = TipoConhecimentoEnum;
  areasConhecimentoChaveDescricao = new Array<ChaveDescricaoDTO>();

  constructor() { }

  ngOnInit() {
    
  }

  obterDetalhesTechStack() {
    this.obterDetalhesTechStackEmitter.emit();
  }

}
