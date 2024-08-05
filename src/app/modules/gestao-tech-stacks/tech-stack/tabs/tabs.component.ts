import { Component, OnInit } from '@angular/core';
import { TipoConhecimentoEnum } from 'src/app/shared/enums/tipo-conhecimento.enum';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  abaSelecionada: string;
  tipoConhecimentoEnum = TipoConhecimentoEnum;

  constructor() { }

  ngOnInit() {
  }

}
