import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ColaboradorFacade } from 'src/app/core/facade/colaborador.facade';
import { ColaboradorDTO } from 'src/app/shared/dtos/colaborador.dto';
import { FiltroColaboradorDTO } from 'src/app/shared/dtos/filtro-colaborador.dto';

@Component({
  selector: 'app-gestao-colaboradores',
  templateUrl: './gestao-colaboradores.component.html',
  styleUrls: ['./gestao-colaboradores.component.scss']
})
export class GestaoColaboradoresComponent implements OnInit {

  listaColaboradores = new Array<ColaboradorDTO>();
  formColaborador: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private readonly colaboradorFacade: ColaboradorFacade
  ) { }

  ngOnInit() {
    this.createForm();
    this.obterColaboradores();
  }

  obterColaboradores() {
    const dto = new FiltroColaboradorDTO();
    dto.colaborador = this.formColaborador.get('colaborador').value;
    
    this.colaboradorFacade.obterColaboradores(dto).subscribe((response: any) => {
      this.listaColaboradores = response;
    });
  }

  createForm() {
    this.formColaborador = this.formBuilder.group({
      colaborador: new FormControl(null),
    });
  }

}
