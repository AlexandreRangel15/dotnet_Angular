import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './components/eventos/eventos';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { Palestrantes } from './components/palestrantes/palestrantes';

 export const routes: Routes = [
    { path: 'eventos', component: EventosComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'contatos', component: ContatosComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'palestrantes', component: Palestrantes },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

