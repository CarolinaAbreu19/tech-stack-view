import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legenda-nivel-conhecimento',
  templateUrl: './legenda-nivel-conhecimento.component.html',
  styleUrls: ['./legenda-nivel-conhecimento.component.scss']
})
export class LegendaNivelConhecimentoComponent implements OnInit {

  dadosLegenda = [{
    nivelConhecimento: "desconhecido",
    valor: 1,
    tituloExplicacao: "desconhecimento",
    explicacao: "Nenhum conhecimento sobre o assunto ou apenas ouviu falar"
  }];

  constructor() { }

  ngOnInit() {
  }

}
