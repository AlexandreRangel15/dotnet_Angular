import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Palestrantes } from './palestrantes/palestrantes';
import { EventosComponent } from "./eventos/eventos";
import { HttpClient } from '@angular/common/http'; // Mantenha apenas o HttpClient
import { Nav } from './nav/nav';



import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { EventoService } from './services/evento.service';
import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  // ❌ Remova o HttpClientModule daqui
  imports: [RouterOutlet, Palestrantes, EventosComponent, Nav, FormsModule, CollapseModule, DateTimeFormatPipe], 
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [EventoService] // Não é necessário fornecer o HttpClient aqui, pois ele já é fornecido globalmente por provideHttpClient()
})
export class App {
  // ✅ Isso vai funcionar automaticamente por causa do provideHttpClient() no app.config.ts
  constructor(private http: HttpClient) {}
  
  protected readonly title = signal('DOTNET_ANGULAR-APP');
}