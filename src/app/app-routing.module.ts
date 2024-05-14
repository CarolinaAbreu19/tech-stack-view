import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GestaoTechStacksComponent } from './modules/gestao-tech-stacks/gestao-tech-stacks.component';

const routes: Routes = [
  { path: 'techStacks', component: GestaoTechStacksComponent },
  // { path: 'time', component: TimeComponent },
  { path: '', redirectTo: '/techStacks', pathMatch: 'full' }, // Página padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
