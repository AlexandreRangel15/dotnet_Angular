import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Palestrantes } from './palestrantes/palestrantes';
import { EventosComponent } from "./eventos/eventos";
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Palestrantes, EventosComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private http: HttpClient) {}
  protected readonly title = signal('DOTNET_ANGULAR-APP');
}
