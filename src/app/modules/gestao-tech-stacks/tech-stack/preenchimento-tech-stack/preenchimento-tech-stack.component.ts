import { Component, OnInit, ViewChild, ViewRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TechStackFacade } from 'src/app/core/facade/tech-stack.facade';

@Component({
  selector: 'app-preenchimento-tech-stack',
  templateUrl: './preenchimento-tech-stack.component.html',
  styleUrls: ['./preenchimento-tech-stack.component.scss']
})
export class PreenchimentoTechStackComponent implements OnInit {

  informacoesTechStack;
  nomeTechStack: string;
  activeIndex: number | null = null;

  constructor(
    public readonly techStackFacade: TechStackFacade,
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

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

}
