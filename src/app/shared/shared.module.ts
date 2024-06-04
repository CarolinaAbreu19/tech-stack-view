import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardBorderComponent } from './components/card-border/card-border.component';
import { CardStickerComponent } from './components/card-sticker/card-sticker.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    CardBorderComponent,
    CardStickerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    CardBorderComponent,
    CardStickerComponent,
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
