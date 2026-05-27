import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Palestrantes } from './components/palestrantes/palestrantes';
import { EventosComponent } from "./components/eventos/eventos";
import { ContatosComponent } from './components/contatos/contatos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClient } from '@angular/common/http'; // Mantenha apenas o HttpClient
import { Nav } from './shared/nav/nav';

import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipConfig } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EventoService } from './services/evento.service';
import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TituloComponent } from './shared/titulo/titulo.component'; 
import { AppRoutingModule } from './app.routes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    Palestrantes, 
    EventosComponent, 
    ContatosComponent,
    PerfilComponent,
    TituloComponent,
    DashboardComponent,
    Nav, 
    FormsModule, 
    CollapseModule, 
    DateTimeFormatPipe, 
    BsDropdownModule, 
    ModalModule, 
    ToastrModule, 
    NgxSpinnerModule,
    AppRoutingModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [EventoService, TooltipConfig, BsModalRef]
})


export class App {
  // ✅ Isso vai funcionar automaticamente por causa do provideHttpClient() no app.config.ts
  constructor(private http: HttpClient) {}
  
  protected readonly title = signal('DOTNET_ANGULAR-APP');
}