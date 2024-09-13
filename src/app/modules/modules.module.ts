import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestaoTechStacksComponent } from './gestao-tech-stacks/gestao-tech-stacks.component';
import { SharedModule } from "../shared/shared.module";
import { TechStackComponent } from './gestao-tech-stacks/tech-stack/tech-stack.component';
import { TabViewModule } from 'primeng/tabview';
import { TabsComponent } from './gestao-tech-stacks/tech-stack/tabs/tabs.component';
import { TabAssuntosComponent } from './gestao-tech-stacks/tech-stack/tabs/tab-assuntos/tab-assuntos.component';

@NgModule({
    declarations: [
        GestaoTechStacksComponent,
        TechStackComponent,
        TabsComponent,
        TabAssuntosComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        SharedModule,
        TabViewModule,
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
