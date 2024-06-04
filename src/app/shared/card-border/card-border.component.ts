import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-border',
  templateUrl: './card-border.component.html',
  styleUrls: ['./card-border.component.scss']
})
export class CardBorderComponent implements OnInit {
  @Input() tituloCard: string | undefined;
  @Input() valorCard: number | undefined;

  constructor() { }

  ngOnInit() {
  }

}
