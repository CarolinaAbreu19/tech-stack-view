import { Component, Input, OnInit } from '@angular/core';
import { AreaConhecimentoDTO } from '../../dtos/area-conhecimento.dto';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NovaAreaConhecimentoDTO } from '../../dtos/nova-area-conhecimento.dto';

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

  constructor(
    private formBuilder: FormBuilder,
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
    dto.areaConhecimento = this.formArea.get('areaConhecimento').value

    console.log(dto);
  }

}