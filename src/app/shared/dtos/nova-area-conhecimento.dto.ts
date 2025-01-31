export class NovaAreaConhecimentoDTO {

    idArea: number;
    idTipoConhecimento: number;
    idTechStack: number;
    descricao: string;

    constructor(param?: any) {
        if (param) {
            this.idArea = param.idArea;
            this.idTipoConhecimento = param.idTipoConhecimento;
            this.idTechStack = param.idTechStack;
            this.descricao = param.descricao;
        }
    }
}