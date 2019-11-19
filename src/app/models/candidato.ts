import { Experiencia } from "./experiencia";

export class Candidato {
  id: number;
  nome: string;
  dataNascimento: string;
  cpf: string;
  sexo: string;
  estadoCivil: string;
  rg: string;
  experiencia: string;
  endereco: string;
  telefone: string;
  experiencias: Experiencia[];
}
