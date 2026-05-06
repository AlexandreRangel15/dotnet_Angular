import { get } from "https";
import { RedeSocial } from "./RedeSocial";
import { Lote } from "./Lote";
import { Palestrante } from "./Palestrante";

export interface Evento {    
  EventoId: number;
  Local: string;
  DataEvento?: Date;
  Tema: string;
  QtdPessoas: number;
  Lote: string;
  ImagemURL: string;
  Telefone: string;
  Email: string;
  Lotes: Lote[];
  RedesSociais: RedeSocial[];
  PalestrantesEventos: Palestrante[];
}

