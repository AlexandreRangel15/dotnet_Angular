import { get } from "https";
import { RedeSocial } from "./RedeSocial";
import { Lote } from "./Lote";
import { Palestrante } from "./Palestrante";

export interface Evento {    
  eventoId: number;
  local: string;
  dataEvento?: Date;
  tema: string;
  qtdPessoas: number;
  lote: string;
  imagemURL: string;
  telefone: string;
  email: string;
  lotes: Lote[];
  redesSociais: RedeSocial[];
  palestrantesEventos: Palestrante[];
}

