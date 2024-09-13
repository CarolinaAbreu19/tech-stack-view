export class ChaveDescricaoDTO {

    chave: number;
    descricao: string;

    constructor(param?: any) {
        if (param) {
            this.chave = param.chave;
            this.descricao = param.descricao;
        }
    }
}