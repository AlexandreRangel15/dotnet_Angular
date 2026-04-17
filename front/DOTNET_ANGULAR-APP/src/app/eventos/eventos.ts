import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // Importe o ChangeDetectorRef

@Component({
  selector: 'app-eventos',
  standalone: true, // Se estiver usando Angular 17+
  imports: [],
  templateUrl: './eventos.html',
  styleUrl: './eventos.scss',
})
export class EventosComponent implements OnInit {
  
  public eventos: any = []; // Inicialize como array vazio para evitar erros no template

  // Injete o ChangeDetectorRef no construtor
  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef 
  ) { }

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/evento').subscribe({
      next: (response) => {
        this.eventos = response;
        this.cdr.detectChanges(); // Força a verificação de mudanças após receber os dados
      },
      error: (error) => console.log(error)
    });
  }
}