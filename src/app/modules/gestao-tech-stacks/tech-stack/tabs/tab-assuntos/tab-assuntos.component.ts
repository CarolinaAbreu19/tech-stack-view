import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AssuntoFacade } from 'src/app/core/facade/assunto.facade';
import { AreaConhecimentoDTO } from 'src/app/shared/dtos/area-conhecimento.dto';
import { AssuntoDTO } from 'src/app/shared/dtos/assunto.dto';
import { ChaveDescricaoDTO } from 'src/app/shared/dtos/chave-descricao.dto';
import { DadosModalDTO } from 'src/app/shared/dtos/dados-modal.dto';
import { InformacoesTechStackDTO } from 'src/app/shared/dtos/informacoes-tech-stack.dto';
import { NovoAssuntoDTO } from 'src/app/shared/dtos/novo-assunto.dto';
import { RelevanciaEnum } from 'src/app/shared/enums/relevancia.enum';
import { MSG_SUCESSO } from 'src/app/shared/utils/constants';
import { SweetalertCustom } from 'src/app/shared/utils/sweetalert-custom';
import { Util } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-tab-assuntos',
  templateUrl: './tab-assuntos.component.html',
  styleUrls: ['./tab-assuntos.component.scss'],
})
export class TabAssuntosComponent implements OnInit {
  @Input() areasConhecimento: AreaConhecimentoDTO[];
  @Output() obterDetalhesTechStackEmitter = new EventEmitter();
  
  areasConhecimentoChaveDescricao = new Array<ChaveDescricaoDTO>();
  relevanciaEnum = RelevanciaEnum;
  relevanciaSelecionada: number;
  idAreaSelecionada: number;
  listaAssuntos: AssuntoDTO[];
  
  formAssunto: FormGroup;
  formEditarAssunto: FormGroup;
  idAssuntoEditarExcluir: number;
  descricaoAssunto: string;


  constructor(
    private assuntoFacade: AssuntoFacade,
    private formBuilder: FormBuilder,
    private ngbModal: NgbModal,
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
    this.obterAssuntosPorAreaConhecimento(this.idAreaSelecionada);
  }

  obterAssuntosPorAreaConhecimento(idArea: number) {
    this.assuntoFacade.obterAssuntosPorAreaConhecimento(idArea).subscribe((response: any) => {
      this.listaAssuntos = response;
    });
  }

  botaoSelecionado(relevancia: number) {
    this.relevanciaSelecionada = relevancia;
  }

  criarNovoAssunto() {
    const dto = new NovoAssuntoDTO();
    dto.idAreaConhecimento = this.idAreaSelecionada;
    dto.assunto = this.formAssunto.get('assunto').value.trim();
    dto.relevancia = this.relevanciaSelecionada;

    this.assuntoFacade.criarNovoAssunto(dto).subscribe((response: any) => {
      if(response) {
        SweetalertCustom.showAlertTimer('success', MSG_SUCESSO).then(() => {
          this.formAssunto.get('assunto').setValue(null);
          this.relevanciaSelecionada  = null;
          this.obterAssuntosPorAreaConhecimento(this.idAreaSelecionada);
          this.obterDetalhesTechStackEmitter.emit();
        });
      }
    });
  }

  createForm() {
    this.formAssunto = this.formBuilder.group({
      assunto: new FormControl(null, Validators.required)
    });   
  }

  bloquearCriacaoNovoAssunto() {
    if(this.relevanciaSelecionada && this.idAreaSelecionada && this.formAssunto.valid)
      return false;

    return true
  }

  showModalEditar(content, idAssunto: number) {
    this.formAssunto.get('assunto').setValue(null);
    const modalRef = Util.openModal(this.ngbModal, content, 'md');
    this.idAssuntoEditarExcluir = idAssunto;
    
    modalRef.result.then((result) => {
      this.obterDetalhesTechStackEmitter.emit();
    });
  }

  showModalExcluir(content, assunto: AssuntoDTO) {
    const modalRef = Util.openModal(this.ngbModal, content, 'md');
    this.idAssuntoEditarExcluir = assunto.id;
    this.descricaoAssunto = assunto.nome;
    modalRef.result.then((result) => {
      this.obterDetalhesTechStackEmitter.emit();
    });
  }

  editarAssunto() {
    const dto = new NovoAssuntoDTO();
    dto.idAssunto = this.idAssuntoEditarExcluir;
    dto.assunto = this.formAssunto.get('assunto').value.trim();
    dto.relevancia = this.relevanciaSelecionada;

    this.assuntoFacade.editarAssunto(dto).subscribe((response: any) => {
      if(response){
        SweetalertCustom.showAlertTimer('success', MSG_SUCESSO).then(() => {
          this.limparFormulario();
          this.ngbModal.dismissAll();
          this.obterAssuntosPorAreaConhecimento(this.idAreaSelecionada);
          this.obterDetalhesTechStackEmitter.emit();
        });
      }
    });
  }

  excluirAssunto() {
    this.assuntoFacade.excluirAssunto(this.idAssuntoEditarExcluir).subscribe((response: any) => {
      if(response){
        SweetalertCustom.showAlertTimer('success', MSG_SUCESSO).then(() => {
          this.limparFormulario()
          this.obterAssuntosPorAreaConhecimento(this.idAreaSelecionada);
          this.obterDetalhesTechStackEmitter.emit();
          this.ngbModal.dismissAll();
        });
      }
    });
  }

  limparFormulario() {
    this.formAssunto.get('assunto').setValue(null);
    this.relevanciaSelecionada = null;
  }

}
