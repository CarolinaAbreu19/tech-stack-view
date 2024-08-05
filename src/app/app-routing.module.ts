import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GestaoTechStacksComponent } from './modules/gestao-tech-stacks/gestao-tech-stacks.component';
import { ControlAccessGuard } from 'src/app/core/guards/control-access.guard';
import { TechStackComponent } from './modules/gestao-tech-stacks/tech-stack/tech-stack.component';

const routes: Routes = [
  { 
    path: 'tech-stacks', 
    component: GestaoTechStacksComponent,
    canActivate: [ControlAccessGuard] 
  },
  {
    path: 'tech-stack/:idTechStack/:nomeTechStack',
    component: TechStackComponent,
    canActivate: [ControlAccessGuard]
  },
  { 
    path: '', 
    redirectTo: '/tech-stacks', 
    pathMatch: 'full'
  },
  {
    path: 'sem-permissao',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
