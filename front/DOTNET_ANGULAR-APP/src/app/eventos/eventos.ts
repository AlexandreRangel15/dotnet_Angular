import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // Importe o ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  standalone: true, // Se estiver usando Angular 17+
  imports: [CommonModule, CollapseModule, FormsModule],
  templateUrl: './eventos.html',
  styleUrl: './eventos.scss',
})
export class EventosComponent implements OnInit {
  
  
  public eventos: any = []; // Inicialize como array vazio para evitar erros no template
  public eventosFiltrados: any = [];

  public mostrarImagem: boolean = true;
  private _filtroLista: string = '';

  public get filtroLista() {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this._filtroLista ? this.filtrarEventos(this._filtroLista) : this.eventos;
  }

filtrarEventos(filtrarPor: string): any {
  filtrarPor = filtrarPor.toLocaleLowerCase();
  return this.eventos.filter(
    (    evento: { tema: string; local: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || 
          evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
  )
}
  // Injete o ChangeDetectorRef no construtor
  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef 
  ) { }

  ngOnInit(): void {
    this.getEventos();
  }

  alterarImagem(): void {
    this.mostrarImagem = !this.mostrarImagem;
  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/evento').subscribe({
      next: (response) => {
        this.eventos = response; 
        this.eventosFiltrados = this.eventos;
        // Força a verificação de mudanças após receber os dados
        this.cdr.detectChanges();
      },
      error: (error) => console.log(error)
    });
  }
}