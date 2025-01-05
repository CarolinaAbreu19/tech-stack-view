import { Component, OnInit, ViewChild, ViewRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssuntoFacade } from 'src/app/core/facade/assunto.facade';
import { TechStackFacade } from 'src/app/core/facade/tech-stack.facade';
import { AssuntoDTO } from 'src/app/shared/dtos/assunto.dto';
import { InformacoesTechStackDTO } from 'src/app/shared/dtos/informacoes-tech-stack.dto';
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

  constructor(
    public readonly techStackFacade: TechStackFacade,
    private assuntoFacade: AssuntoFacade,
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

  salvarNivelSelecionado(event: number, idAssunto: number) {
    console.log(event, idAssunto)
  }

}
