import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { AreaConhecimentoDTO } from '../../dtos/area-conhecimento.dto';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NovaAreaConhecimentoDTO } from '../../dtos/nova-area-conhecimento.dto';
import { DadosModalDTO } from '../../dtos/dados-modal.dto';
import { AreaConhecimentoFacade } from 'src/app/core/facade/area-conhecimento.facade';
import { NgbActiveModal, NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Util } from '../../utils/util';
import { MSG_SUCESSO } from '../../utils/constants';
import { SweetalertCustom } from '../../utils/sweetalert-custom';

@Component({
  selector: 'app-novo-conhecimento',
  templateUrl: './novo-conhecimento.component.html',
  styleUrls: ['./novo-conhecimento.component.scss'],
})
export class NovoConhecimentoComponent implements OnInit {
  @Input() tipoConhecimento: number;
  @Input() idTechStack: number;
  @Input() areasConhecimento: AreaConhecimentoDTO[];
  @Output() obterDetalhesTechStackEmitter = new EventEmitter();
  
  formArea: FormGroup;
  
  exibirModalEditar = false;
  dadosModal = new DadosModalDTO();
  idAreaEditarExcluir: number = null;
  descricaoArea: string;

  constructor(
    private formBuilder: FormBuilder,
    private areaConhecimentoFacade: AreaConhecimentoFacade,
    private ngbModal: NgbModal,
  ) { }

  ngOnInit() {
    this.createForm();
    this.filtrarAreasConhecimento();

  }

  createForm() {
    this.formArea = this.formBuilder.group({
      areaConhecimento: new FormControl(null, Validators.required)
    });
  }

  filtrarAreasConhecimento() {
    this.areasConhecimento = this.areasConhecimento.filter(area => area.idTipoConhecimento === this.tipoConhecimento);
  }

  criarNovaAreaConhecimento() {
    if(this.formArea.valid){
      const dto = new NovaAreaConhecimentoDTO();
      dto.idTipoConhecimento = this.tipoConhecimento;
      dto.idTechStack = this.idTechStack;
      dto.descricao = this.formArea.get('areaConhecimento').value.trim();

      this.areaConhecimentoFacade.criarNovaAreaConhecimento(dto).subscribe((response: any) => {
        if(response){
          SweetalertCustom.showAlertTimer('success', MSG_SUCESSO).then(() => {
            this.formArea.get('areaConhecimento').setValue(null);
            this.obterDetalhesTechStackEmitter.emit();
          });
        }
      });
    }
  }

  editarAreaConhecimento() {
    const dto = new NovaAreaConhecimentoDTO();
    dto.idArea = this.idAreaEditarExcluir;
    dto.descricao = this.formArea.get('areaConhecimento').value.trim();

    this.areaConhecimentoFacade.editarAreaConhecimento(dto).subscribe((response: any) => {
      if(response){
        SweetalertCustom.showAlertTimer('success', MSG_SUCESSO).then(() => {
          this.formArea.get('areaConhecimento').setValue(null);
          this.obterDetalhesTechStackEmitter.emit();
          this.ngbModal.dismissAll();
        });
      }
    });
  }

  showModalEditar(content, idArea: number) {
    this.formArea.get('areaConhecimento').setValue(null);
    
    const modalRef = Util.openModal(this.ngbModal, content, 'md');
    this.idAreaEditarExcluir = idArea;
    
    modalRef.result.then((result) => {
      this.obterDetalhesTechStackEmitter.emit();
    });
  }

  showModalExcluir(content, area: AreaConhecimentoDTO) {
    const modalRef = Util.openModal(this.ngbModal, content, 'md');
    this.idAreaEditarExcluir = area.id;
    this.descricaoArea = area.nome;
    modalRef.result.then((result) => {
      this.obterDetalhesTechStackEmitter.emit();
    });
  }

  excluirAreaConhecimento(){
    this.areaConhecimentoFacade.excluirAreaConhecimento(this.idAreaEditarExcluir).subscribe((response: any) => {
      if(response){
        SweetalertCustom.showAlertTimer('success', MSG_SUCESSO).then(() => {
          this.formArea.get('areaConhecimento').setValue(null);
          this.obterDetalhesTechStackEmitter.emit();
          this.ngbModal.dismissAll();
        });
      }
    });
  }

}