export class RespostasColaboradorDTO {

    colaborador: string;
    perfilColaborador: string;
    dataPreenchimento: string;
    semPreenchimentoUltimos12Meses: boolean;

    constructor(param?: any) {
        if (param) {
            this.colaborador = param.colaborador;
            this.perfilColaborador = param.perfilColaborador;
            this.dataPreenchimento = param.dataPreenchimento;
            this.semPreenchimentoUltimos12Meses = param.semPreenchimentoUltimos12Meses;
        }
    }
}