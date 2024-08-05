export class GestaoTechStackDTO {
    id: number | undefined;
    nome: string | undefined;
    quantidadePreenchimentos: number | undefined;
  
    constructor(params?: any) {
      if (params) {
        this.id                       = params.id;
        this.nome                     = params.nome;
        this.quantidadePreenchimentos = params.quantidadePreenchimentos;
      }
    }
}