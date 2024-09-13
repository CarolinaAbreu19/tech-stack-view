export class AssuntoDTO {

    id: number;
    nome: string;
    relevancia: number;

    constructor(param?: any) {
        if (param) {
            this.id = param.id;
            this.nome = param.nome;
            this.relevancia = param.relevancia;
        }
    }
}