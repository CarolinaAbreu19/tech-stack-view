import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FiltroColaboradorDTO } from 'src/app/shared/dtos/filtro-colaborador.dto';
import { RespostasColaboradorDTO } from 'src/app/shared/dtos/respostas-colaborador.dto';

@Component({
  selector: 'app-tab-respostas',
  templateUrl: './tab-respostas.component.html',
  styleUrls: ['./tab-respostas.component.scss']
})
export class TabRespostasComponent implements OnInit {
  @Input() idTechStack: number;
  formColaborador: FormGroup;
  isChecked: boolean;

  listaRespostas: RespostasColaboradorDTO[];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  buscarColaborador() {
    const dto = new FiltroColaboradorDTO();
    dto.idTechStack = this.idTechStack;
    dto.colaborador = this.formColaborador.get('colaborador').value;
    dto.semPreenchimentoUltimos12Meses = this.formColaborador.get('semPreenchimentoUltimos12Meses').value.length !== 0 ? true : false;

    console.log(dto);
  }

  createForm() {
    this.formColaborador = this.formBuilder.group({
      colaborador: new FormControl(null, Validators.required),
      semPreenchimentoUltimos12Meses: new FormControl([])
    });
  }

  obterRespostasTechStack() {

  }

}
