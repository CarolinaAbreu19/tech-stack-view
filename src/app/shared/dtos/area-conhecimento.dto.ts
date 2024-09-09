export class AreaConhecimentoDTO {

    id: number;
    idTipoConhecimento: number;
    nome: string;
    quantidadeAssuntos: number;

    constructor(param?: any) {
        if (param) {
            this.id = param.id;
            this.idTipoConhecimento = param.idTipoConhecimento;
            this.nome = param.nome;
            this.quantidadeAssuntos = param.quantidadeAssuntos;
        }
    }
}