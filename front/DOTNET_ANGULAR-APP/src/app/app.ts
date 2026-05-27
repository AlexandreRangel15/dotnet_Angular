import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Palestrantes } from './palestrantes/palestrantes';
import { EventosComponent } from "./eventos/eventos";
import { HttpClient } from '@angular/common/http'; // Mantenha apenas o HttpClient
import { Nav } from './nav/nav';


import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipConfig } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EventoService } from './services/evento.service';
import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  // ❌ Remova o HttpClientModule daqui
  imports: [RouterOutlet, Palestrantes, EventosComponent, Nav, FormsModule, CollapseModule, DateTimeFormatPipe, BsDropdownModule, ModalModule, ToastrModule], // O HttpClientModule deve ser importado apenas uma vez, geralmente no AppModule ou fornecido globalmente por provideHttpClient()
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [EventoService,  TooltipConfig] // Não é necessário fornecer o HttpClient aqui, pois ele já é fornecido globalmente por provideHttpClient()
})
export class App {
  // ✅ Isso vai funcionar automaticamente por causa do provideHttpClient() no app.config.ts
  constructor(private http: HttpClient) {}
  
  protected readonly title = signal('DOTNET_ANGULAR-APP');
}