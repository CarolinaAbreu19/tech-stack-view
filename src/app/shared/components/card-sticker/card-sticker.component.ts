import { Component, Input, OnInit } from '@angular/core';
import { DadosCardStickerDTO } from '../../dtos/dados-card-sticker.dto';

@Component({
  selector: 'app-card-sticker',
  templateUrl: './card-sticker.component.html',
  styleUrls: ['./card-sticker.component.scss']
})
export class CardStickerComponent implements OnInit {
  @Input() dadosCard: DadosCardStickerDTO;

  constructor() { }

  ngOnInit() {
  }

}
