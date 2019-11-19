import { Vaga } from "./vaga";

export class Empresa {
  id: number;
  razaoSocial: string;
  cnpj: string;
  endereco: string;
  bairro: string;
  uf: string;
  cidade: string;
  cep: string;
  email: string;
  telefone: string;
  vagas: Vaga[];
}
