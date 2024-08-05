import { Component, OnInit } from '@angular/core';
import { TechStackFacade } from 'src/app/core/facade/tech-stack.facade';
import { GestaoTechStackDTO } from 'src/app/dtos/tech-stack/gestao-tech-stack.dto';

@Component({
  selector: 'app-gestao-tech-stacks',
  templateUrl: './gestao-tech-stacks.component.html',
  styleUrls: ['./gestao-tech-stacks.component.scss']
})
export class GestaoTechStacksComponent implements OnInit {

  listaTechStacks: GestaoTechStackDTO[];

  constructor(
    public readonly techStackFacade: TechStackFacade
  ) { }

  ngOnInit() {
    this.obterTechStacks();
  }

  obterTechStacks() {
    this.techStackFacade.obterTechStacks().subscribe((response: any) => {
      this.listaTechStacks = response;
    });
  }

}
