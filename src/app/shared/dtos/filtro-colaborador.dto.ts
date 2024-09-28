export class FiltroColaboradorDTO {

    idTechStack: number;
    colaborador: string;
    semPreenchimentoUltimos12Meses: boolean;

    constructor(param?: any) {
        if (param) {
            this.idTechStack = param.idTechStack;
            this.colaborador = param.colaborador;
            this.semPreenchimentoUltimos12Meses = param.semPreenchimentoUltimos12Meses;
        }
    }
}