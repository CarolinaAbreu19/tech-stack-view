import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardBorderComponent } from './components/card-border/card-border.component';
import { CardStickerComponent } from './components/card-sticker/card-sticker.component';
import { NovoConhecimentoComponent } from './components/novo-conhecimento/novo-conhecimento.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    CardBorderComponent,
    CardStickerComponent,
    NovoConhecimentoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    CardBorderComponent,
    CardStickerComponent,
    NovoConhecimentoComponent,
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
