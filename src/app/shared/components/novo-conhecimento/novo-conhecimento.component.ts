import { Component, Input, OnInit } from '@angular/core';
import { AreaConhecimentoDTO } from '../../dtos/area-conhecimento.dto';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-conhecimento',
  templateUrl: './novo-conhecimento.component.html',
  styleUrls: ['./novo-conhecimento.component.scss'],
})
export class NovoConhecimentoComponent implements OnInit {
  @Input() tipoConhecimento: number;
  @Input() areasConhecimento: AreaConhecimentoDTO;

  formArea: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  createForm() {
    this.formArea = this.formBuilder.group({
      areaConhecimento: new FormControl(null, Validators.required)
    })
  }

  criarNovaAreaConhecimento() {
    console.log(this.formArea.get('areaConhecimento').value)
  }

}