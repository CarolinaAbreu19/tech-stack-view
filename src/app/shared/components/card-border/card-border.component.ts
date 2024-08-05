import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-border',
  templateUrl: './card-border.component.html',
  styleUrls: ['./card-border.component.scss']
})
export class CardBorderComponent implements OnInit {
  @Input() id: number;
  @Input() tituloCard: string;
  @Input() valorCard: number;

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  showTechStack() {
    this.router.navigate(["/", "tech-stack", this.id, this.tituloCard]);
  }

}
