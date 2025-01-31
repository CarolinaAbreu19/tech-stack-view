export class NovaRespostaDTO {

    idTechStack: number;
    idAssunto: number;
    idNivelConhecimento: number;

    constructor(param?: any) {
        if (param) {
            this.idTechStack = param.idTechStack;
            this.idAssunto = param.idAssunto;
            this.idNivelConhecimento = param.idNivelConhecimento;
        }
    }
}