import { NovaRespostaDTO } from "./resposta.dto";

export class PreenchimentoTechStackDTO {

    idTechStack: number;
    respostas: Array<NovaRespostaDTO>;

    constructor(param?: any) {
        if (param) {
            this.idTechStack = param.idTechStack;
            this.respostas = param.respostas;
        }
    }
}