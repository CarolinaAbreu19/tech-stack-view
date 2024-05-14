import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestaoTechStacksComponent } from './gestao-tech-stacks/gestao-tech-stacks.component';



@NgModule({
  declarations: [
    GestaoTechStacksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GestaoTechStacksComponent
  ]
})
export class ModulesModule {
  static forRoot(): ModuleWithProviders<ModulesModule> {
    return {
      ngModule: ModulesModule,
      providers: [],
    };
  }
 }
