export class CardTechStackDTO {
    id: number | undefined;
    nome: string | undefined;
    quantidadeAssuntos: number | undefined;
  
    constructor(params?: any) {
      if (params) {
        this.id                 = params.id;
        this.nome               = params.nome;
        this.quantidadeAssuntos = params.quantidadeAssuntos;
      }
    }
}