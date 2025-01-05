export class NovaAreaConhecimentoDTO {

    idTipoConhecimento: number;
    idTechStack: number;
    descricao: string;

    constructor(param?: any) {
        if (param) {
            this.idTipoConhecimento = param.idTipoConhecimento;
            this.idTechStack = param.idTechStack;
            this.descricao = param.descricao;
        }
    }
}