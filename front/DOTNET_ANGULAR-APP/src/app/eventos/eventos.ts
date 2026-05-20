import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // Importe o ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { EventoService } from '../services/evento.service';
import { Evento } from '../models/Evento';
import { DateTimeFormatPipe } from "../helpers/DateTimeFormat.pipe";

@Component({
  selector: 'app-eventos',
  standalone: true, // Se estiver usando Angular 17+
  imports: [CommonModule, CollapseModule, FormsModule, DateTimeFormatPipe],
  templateUrl: './eventos.html',
  styleUrl: './eventos.scss',
})
export class EventosComponent implements OnInit {
  
  
  public eventos: Evento[] = []; // Inicialize como array vazio para evitar erros no template
  public eventosFiltrados: Evento[] = [];

  public mostrarImagem: boolean = true;
  private _filtroLista: string = '';

  public get filtroLista() {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this._filtroLista ? this.filtrarEventos(this._filtroLista) : this.eventos;
  }

  public filtrarEventos(filtrarPor: string): Evento[] {
  filtrarPor = filtrarPor.toLocaleLowerCase();
  return this.eventos.filter(
    (    evento: { tema: string; local: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || 
          evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
  )
}
  // Injete o ChangeDetectorRef no construtor
  constructor(
    private eventoService: EventoService,
    private cdr: ChangeDetectorRef 
  ) { }

  public ngOnInit(): void {
    this.getEventos();
  }

  public alterarImagem(): void {
    this.mostrarImagem = !this.mostrarImagem;
  }

  public getEventos(): void {
    this.eventoService.getEvento().subscribe(
      (eventos: Evento[]) => {
        this.eventos = eventos;
        this.eventosFiltrados = this.eventos;
        // Força a verificação de mudanças após receber os dados
        this.cdr.detectChanges();
      },
      error => console.log(error)
    );
  }
}