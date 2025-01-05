import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AssuntoFacade } from 'src/app/core/facade/assunto.facade';
import { AreaConhecimentoDTO } from 'src/app/shared/dtos/area-conhecimento.dto';
import { AssuntoDTO } from 'src/app/shared/dtos/assunto.dto';
import { ChaveDescricaoDTO } from 'src/app/shared/dtos/chave-descricao.dto';
import { DadosModalDTO } from 'src/app/shared/dtos/dados-modal.dto';
import { InformacoesTechStackDTO } from 'src/app/shared/dtos/informacoes-tech-stack.dto';
import { NovoAssuntoDTO } from 'src/app/shared/dtos/novo-assunto.dto';
import { RelevanciaEnum } from 'src/app/shared/enums/relevancia.enum';

@Component({
  selector: 'app-tab-assuntos',
  templateUrl: './tab-assuntos.component.html',
  styleUrls: ['./tab-assuntos.component.scss'],
})
export class TabAssuntosComponent implements OnInit {
  @Input() areasConhecimento: AreaConhecimentoDTO[];
  areasConhecimentoChaveDescricao = new Array<ChaveDescricaoDTO>();
  relevanciaEnum = RelevanciaEnum;
  relevanciaSelecionada: number;
  idAreaSelecionada: number;
  listaAssuntos: AssuntoDTO[];
  
  formAssunto: FormGroup;
  formEditarAssunto: FormGroup;
  
  exibirModalSucesso = false;
  dadosModal = new DadosModalDTO();

  constructor(
    private assuntoFacade: AssuntoFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
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
    const idArea = event.chave;
    this.idAreaSelecionada = idArea;

    this.assuntoFacade.obterAssuntosPorAreaConhecimento(idArea).subscribe((response: any) => {
      this.listaAssuntos = response;
    });
  }

  botaoSelecionado(relevancia: number) {
    this.relevanciaSelecionada = relevancia;
  }

  novoAssunto() {
    const dto = new NovoAssuntoDTO();
    dto.idAreaConhecimento = this.idAreaSelecionada;
    dto.assunto = this.formAssunto.get('assunto').value.trim();
    dto.relevancia = this.relevanciaSelecionada;

    this.assuntoFacade.criarNovoAssunto(dto).subscribe((response: any) => {
      if(response) {
        this.formAssunto.get('assunto').setValue(null);
        this.abrirModalSucesso();
      }
    });
  }

  createForm() {
    this.formAssunto = this.formBuilder.group({
      assunto: new FormControl(null, Validators.required)
    });   
  }

  abrirModalSucesso() {
    this.exibirModalSucesso = true;
    this.dadosModal.titulo = "Assunto criado com sucesso!";
    this.dadosModal.tamanhoModal = "pequeno";
  }

  toggleModal(event) {
    if(event) 
      this.exibirModalSucesso = !this.exibirModalSucesso;
  }

}
