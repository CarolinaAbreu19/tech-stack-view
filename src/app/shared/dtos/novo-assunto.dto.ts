export class NovoAssuntoDTO {
    idAssunto: number;
    idAreaConhecimento: number;
    assunto: string;
    relevancia: number;

    constructor(param?: any) {
        if (param) {
            this.idAssunto = param.idAssunto;
            this.idAreaConhecimento = param.idAreaConhecimento;
            this.assunto = param.assunto;
            this.relevancia = param.relevancia;
        }
    }
}