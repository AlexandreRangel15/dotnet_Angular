import { Component, OnInit, ChangeDetectorRef, TemplateRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/Evento';
import { DateTimeFormatPipe } from "../../helpers/DateTimeFormat.pipe";
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';





@Component({
  selector: 'app-eventos',
  standalone: true, // Se estiver usando Angular 17+
  imports: [CommonModule, CollapseModule, FormsModule, DateTimeFormatPipe], // Importe o BsModalRef e BsModalService aqui
  templateUrl: './eventos.html',
  styleUrl: './eventos.scss',

})
export class EventosComponent implements OnInit {
  
  
  modalRef?: BsModalRef;
  public eventoId = 0; // Variável para armazenar o ID do evento a ser excluído

  public eventos: Evento[] = []; // Inicialize como array vazio para evitar erros no template
  public eventosFiltrados: Evento[] = [];

  public mostrarImagem: boolean = true;
  private _filtroLista: string = '';
  BsModalService: any;

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
    private cdr: ChangeDetectorRef,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  public ngOnInit(): void {

    this.getEventos();

    if (isPlatformBrowser(this.platformId)) {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  };
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
      error => {
        console.log(error);
        if (isPlatformBrowser(this.platformId)) {
          this.toastr.error('Erro ao carregar os eventos', 'Erro');
        }
      }
    );
  }

  openModal(template: TemplateRef<any>, eventoId: number): void {
  this.eventoId = eventoId; // Guarda o ID para saber quem excluir
  this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
}

confirmDelete(): void {
  // Aqui você fará a chamada para o serviço de exclusão futuramente usando o this.eventoId
  console.log(`Deletando o evento com ID: ${this.eventoId}`);
  this.toastr.success('Evento deletado com sucesso!', 'Sucesso');

  this.modalRef?.hide();
}

declineDelete(): void {
  this.modalRef?.hide();
}
}