import { Component, Input, OnInit } from '@angular/core';
import { AreaConhecimentoDTO } from 'src/app/shared/dtos/area-conhecimento.dto';
import { AssuntoDTO } from 'src/app/shared/dtos/assunto.dto';
import { ChaveDescricaoDTO } from 'src/app/shared/dtos/chave-descricao.dto';
import { InformacoesTechStackDTO } from 'src/app/shared/dtos/informacoes-tech-stack.dto';
import { RelevanciaEnum } from 'src/app/shared/enums/relevancia.enum';

@Component({
  selector: 'app-tab-assuntos',
  templateUrl: './tab-assuntos.component.html',
  styleUrls: ['./tab-assuntos.component.scss']
})
export class TabAssuntosComponent implements OnInit {
   @Input() areasConhecimento : AreaConhecimentoDTO[];
   areasConhecimentoChaveDescricao = new Array<ChaveDescricaoDTO>();
   relevanciaEnum = RelevanciaEnum;
   relevanciaSelecionada: number;

   listaAssunto: AssuntoDTO[];

  constructor() { }  

  ngOnInit() {
    this.montarAreasConhecimentoChaveDescricao();
  }

  montarAreasConhecimentoChaveDescricao() {
    this.areasConhecimento.forEach(area => {
      const areaMontada = new ChaveDescricaoDTO();
      areaMontada.chave = area.id;
      areaMontada.descricao = area.nome;
      this.areasConhecimentoChaveDescricao.push(areaMontada);
    });
  }

  consultarAreaSelecionada(event) {
    console.log(event);
  }

  botaoSelecionado(relevancia: number) {
    this.relevanciaSelecionada = relevancia;
  }

}
