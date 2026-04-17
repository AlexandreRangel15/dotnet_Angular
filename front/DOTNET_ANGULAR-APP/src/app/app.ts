import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Palestrantes } from './palestrantes/palestrantes';
import { EventosComponent } from "./eventos/eventos";
import { HttpClient } from '@angular/common/http'; // Mantenha apenas o HttpClient


@Component({
  selector: 'app-root',
  standalone: true,
  // ❌ Remova o HttpClientModule daqui
  imports: [RouterOutlet, Palestrantes, EventosComponent], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // ✅ Isso vai funcionar automaticamente por causa do provideHttpClient() no app.config.ts
  constructor(private http: HttpClient) {}
  
  protected readonly title = signal('DOTNET_ANGULAR-APP');
}