export class NovaAreaConhecimentoDTO {

    idTipoConhecimento: number;
    idTechStack: number;
    areaConhecimento: string;

    constructor(param?: any) {
        if (param) {
            this.idTipoConhecimento = param.idTipoConhecimento;
            this.idTechStack = param.idTechStack;
            this.areaConhecimento = param.areaConhecimento;
        }
    }
}