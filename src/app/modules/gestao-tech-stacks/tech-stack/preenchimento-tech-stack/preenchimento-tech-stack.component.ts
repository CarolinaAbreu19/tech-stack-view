import { Component, OnInit, ViewChild, ViewRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssuntoFacade } from 'src/app/core/facade/assunto.facade';
import { RespostaFacade } from 'src/app/core/facade/resposta.facade';
import { TechStackFacade } from 'src/app/core/facade/tech-stack.facade';
import { AssuntoDTO } from 'src/app/shared/dtos/assunto.dto';
import { InformacoesTechStackDTO } from 'src/app/shared/dtos/informacoes-tech-stack.dto';
import { PreenchimentoTechStackDTO } from 'src/app/shared/dtos/preenchimento-tech-stack.dto';
import { NovaRespostaDTO } from 'src/app/shared/dtos/resposta.dto';
import { TipoConhecimentoEnum } from 'src/app/shared/enums/tipo-conhecimento.enum';

@Component({
  selector: 'app-preenchimento-tech-stack',
  templateUrl: './preenchimento-tech-stack.component.html',
  styleUrls: ['./preenchimento-tech-stack.component.scss']
})
export class PreenchimentoTechStackComponent implements OnInit {

  informacoesTechStack: InformacoesTechStackDTO;
  tipoConhecimentoEnum = TipoConhecimentoEnum;
  nomeTechStack: string;
  activeIndex: number | null = null;
  activeAssunto: number | null = null;
  listaAssuntos = new Array<AssuntoDTO>();
  respostas = new Array<NovaRespostaDTO>();

  constructor(
    public readonly techStackFacade: TechStackFacade,
    public readonly respostaFacade: RespostaFacade,
    private readonly assuntoFacade: AssuntoFacade,
    public readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.obterDetalhesTechStack();
  }

  obterDetalhesTechStack() {
    const idTechStack = this.route.snapshot.paramMap.get('idTechStack');
    this.nomeTechStack = this.route.snapshot.paramMap.get('nomeTechStack');
    this.techStackFacade.obterDetalhesTechStack(idTechStack).subscribe((response: any) => {
      this.informacoesTechStack = response;
      this.buscarPreenchimentoUsuario();
    });
  }

  obterAssuntos(idArea: number) {
    this.assuntoFacade.obterAssuntosPorAreaConhecimento(idArea).subscribe((response: any) => {
      this.listaAssuntos = response;
      this.toggleAssunto(idArea);
    });
  }

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
    this.activeAssunto = null;
  }

  toggleAssunto(index: number) {
    this.activeAssunto = this.activeAssunto === index ? null : index;
  }

  salvarResposta(event: number, idAssunto: number) {
    const novaResposta = new NovaRespostaDTO();
    novaResposta.idAssunto = idAssunto;
    novaResposta.idNivelConhecimento = event;
    this.respostas.push(novaResposta);
    
    this.respostaFacade.criarNovaResposta(novaResposta).subscribe((response: any) => {});
  }

  salvarPreenchimento() {
    const preenchimento = new PreenchimentoTechStackDTO();
    preenchimento.idTechStack = this.informacoesTechStack.id;
    preenchimento.respostas = this.respostas;

    this.techStackFacade.salvarPreenchimentoTechStack(preenchimento).subscribe((response: any) => {
      if(response) {
        
      }
    });
  }

  buscarPreenchimentoUsuario() {
    this.techStackFacade.obterPreenchimentoTechStack(this.informacoesTechStack.id).subscribe((response: any) => {
      if(response) {
        
      }
    });
  }

}
