import { Component, Input, OnInit } from '@angular/core';
import { AssuntoFacade } from 'src/app/core/facade/assunto.facade';
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

   listaAssuntos: AssuntoDTO[];

  constructor(
    private assuntoFacade: AssuntoFacade
  ) { }  

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
    const idAreaSelecionada = event.chave;

    this.assuntoFacade.obterAssuntosPorAreaConhecimento(idAreaSelecionada).subscribe((response: any) => {
      this.listaAssuntos = response;
    });
  }

  botaoSelecionado(relevancia: number) {
    this.relevanciaSelecionada = relevancia;
  }

}
