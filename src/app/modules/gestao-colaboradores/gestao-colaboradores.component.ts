import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ColaboradorDTO } from 'src/app/shared/dtos/colaborador.dto';

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
  ) { }

  ngOnInit() {
    this.createForm();
  }

  buscarColaborador() {

  }

  createForm() {
    this.formColaborador = this.formBuilder.group({
      colaborador: new FormControl(null),
    });
  }

}
