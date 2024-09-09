export class RespostasTechStackDTO {

    quantidade: number;
    teorico: number;
    basico: number;
    intermediario: number;
    avancado: number;
    especialista: number;
    dataUltimaResposta: Date;

    constructor(param?: any) {
        if (param) {
            this.quantidade = param.quantidade;
            this.teorico = param.teorico;
            this.basico = param.basico;
            this.intermediario = param.intermediario;
            this.avancado = param.avancado;
            this.especialista = param.especialista;
            this.dataUltimaResposta = param.dataUltimaResposta;
        }
    }
}