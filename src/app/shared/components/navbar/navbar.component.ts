import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() exibirNavbarEmit = new EventEmitter();

  exibirNavbar = true;
  techStackSelecionado = true;
  timeSelecionado = false;

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  minimizarNavbar() {
    this.exibirNavbar = !this.exibirNavbar;
    const teste = this.exibirNavbar
    this.exibirNavbarEmit.emit(teste);
  }

  irParaTechStacks() {
    this.router.navigate(["/tech-stacks"]);
    this.techStackSelecionado = true;
    this.timeSelecionado = false;
  }

  irParaTime() {
    this.router.navigate(["/time"]);
    this.techStackSelecionado = false;
    this.timeSelecionado = true;
  }

  aplicarEstilosOpcoesNavbar(opcao: string) {
    const minimizar = this.exibirNavbar ? "" : "minimizar";
    let ativo;

    switch (opcao) {
      case 'techstack':
        ativo = this.techStackSelecionado ? "ativo" : "";
        break;
      case 'time':
        ativo = this.timeSelecionado ? "ativo" : "";
        break;
      default:
        break;
    }

    return minimizar + " " + ativo;
  }

}
