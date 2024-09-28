import { Component, EventEmitter, Inject, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { DadosModalDTO } from '../../dtos/dados-modal.dto';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() exibirModal = false;
  @Input() dadosModal = new DadosModalDTO(); 
  @Output() ocultarModalEmit = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  fecharModal() {
    this.exibirModal = !this.exibirModal
    this.ocultarModalEmit.emit('true');
  }

  definirEstilos() {
    const tamanhoModal = this.dadosModal.tamanhoModal;

    return tamanhoModal;
  }
  
}