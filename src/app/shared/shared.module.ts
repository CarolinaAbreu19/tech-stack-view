import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardBorderComponent } from './components/card-border/card-border.component';
import { CardStickerComponent } from './components/card-sticker/card-sticker.component';
import { NovoConhecimentoComponent } from './components/novo-conhecimento/novo-conhecimento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { LegendaNivelConhecimentoComponent } from './components/legenda-nivel-conhecimento/legenda-nivel-conhecimento.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    CardBorderComponent,
    CardStickerComponent,
    NovoConhecimentoComponent,
    DropdownComponent,
    LegendaNivelConhecimentoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    CardBorderComponent,
    CardStickerComponent,
    NovoConhecimentoComponent,
    DropdownComponent,
    LegendaNivelConhecimentoComponent,
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
