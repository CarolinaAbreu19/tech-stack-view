export class NovoAssuntoDTO {

    idAreaConhecimento: number;
    assunto: string;
    relevancia: number;

    constructor(param?: any) {
        if (param) {
            this.idAreaConhecimento = param.idAreaConhecimento;
            this.assunto = param.assunto;
            this.relevancia = param.relevancia;
        }
    }
}