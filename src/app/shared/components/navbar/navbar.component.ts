import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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

  aplicarEstilosOpcoesNavbar() {
    const minimizar = this.exibirNavbar ? "" : "minimizar";

    return minimizar;
  }

}
