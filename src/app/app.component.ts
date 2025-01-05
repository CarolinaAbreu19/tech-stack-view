import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'techStackView';
  navbarExibida = true;

  ajusteExibicaoNavbar(event) {
    this.navbarExibida = event;
  }
}
