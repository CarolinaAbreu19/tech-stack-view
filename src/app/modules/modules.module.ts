import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestaoTechStacksComponent } from './gestao-tech-stacks/gestao-tech-stacks.component';
import { SharedModule } from "../shared/shared.module";
import { TechStackComponent } from './gestao-tech-stacks/tech-stack/tech-stack.component';
import { TabViewModule } from 'primeng/tabview';
import { TabsComponent } from './gestao-tech-stacks/tech-stack/tabs/tabs.component';
import { TabAssuntosComponent } from './gestao-tech-stacks/tech-stack/tabs/tab-assuntos/tab-assuntos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabRespostasComponent } from './gestao-tech-stacks/tech-stack/tabs/tab-respostas/tab-respostas.component';
import { GestaoColaboradoresComponent } from './gestao-colaboradores/gestao-colaboradores.component';
import { PreenchimentoTechStackComponent } from './gestao-tech-stacks/tech-stack/preenchimento-tech-stack/preenchimento-tech-stack.component';
import { PainelNivelConhecimentoComponent } from './gestao-tech-stacks/tech-stack/preenchimento-tech-stack/painel-nivel-conhecimento/painel-nivel-conhecimento.component';

@NgModule({
    declarations: [
        GestaoTechStacksComponent,
        TechStackComponent,
        TabsComponent,
        TabAssuntosComponent,
        TabRespostasComponent,
        GestaoColaboradoresComponent,
        PreenchimentoTechStackComponent,
        PainelNivelConhecimentoComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        TabViewModule,
        FormsModule,
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
