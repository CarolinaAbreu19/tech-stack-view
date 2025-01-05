import { Component, Input, OnInit } from '@angular/core';
import { AreaConhecimentoDTO } from '../../dtos/area-conhecimento.dto';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NovaAreaConhecimentoDTO } from '../../dtos/nova-area-conhecimento.dto';
import { DadosModalDTO } from '../../dtos/dados-modal.dto';
import { AreaConhecimentoFacade } from 'src/app/core/facade/area-conhecimento.facade';

@Component({
  selector: 'app-novo-conhecimento',
  templateUrl: './novo-conhecimento.component.html',
  styleUrls: ['./novo-conhecimento.component.scss'],
})
export class NovoConhecimentoComponent implements OnInit {
  @Input() tipoConhecimento: number;
  @Input() idTechStack: number;
  @Input() areasConhecimento: AreaConhecimentoDTO[];

  formArea: FormGroup;

  exibirModalEditar = false;
  dadosModal = new DadosModalDTO();

  constructor(
    private formBuilder: FormBuilder,
    private areaConhecimentoFacade: AreaConhecimentoFacade
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
    const dto = new NovaAreaConhecimentoDTO();
    dto.idTipoConhecimento = this.tipoConhecimento;
    dto.idTechStack = this.idTechStack;
    dto.descricao = this.formArea.get('areaConhecimento').value.trim();

    this.areaConhecimentoFacade.criarNovaAreaConhecimento(dto).subscribe((response: any) => {
      if(response) {
        this.formArea.get('areaConhecimento').setValue(null);
      }
    });
  }

  abrirModalEditar(idArea) {
    this.exibirModalEditar = true;
    this.dadosModal.titulo = "Editar Área";
    this.dadosModal.subtitulo = "Preencha os campos abaixo para editar a área selecionada."
    this.dadosModal.tamanhoModal = "pequeno";
  }

  toggleModal(event) {
    if(event) 
      this.exibirModalEditar = !this.exibirModalEditar;
  }

}