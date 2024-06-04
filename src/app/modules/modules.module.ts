import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestaoTechStacksComponent } from './gestao-tech-stacks/gestao-tech-stacks.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        GestaoTechStacksComponent
    ],
    exports: [
        GestaoTechStacksComponent
    ],
    imports: [
        CommonModule,
        SharedModule
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
