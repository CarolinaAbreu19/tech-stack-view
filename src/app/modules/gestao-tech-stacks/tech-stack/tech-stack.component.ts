import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TechStackFacade } from 'src/app/core/facade/tech-stack.facade';
import { InformacoesTechStackDTO } from 'src/app/shared/dtos/informacoes-tech-stack.dto';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {

  informacoesTechStack: InformacoesTechStackDTO;
  nomeTechStack: string;
  abaSelecionada: string;

  constructor(
    public readonly techStackFacade: TechStackFacade,
    public readonly route: ActivatedRoute,
    private readonly router: Router
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

  preencherTechStack() {
    this.router.navigate(["/", "tech-stack", this.informacoesTechStack.id, this.informacoesTechStack.nome, "preenchimento"]);
  }

}
