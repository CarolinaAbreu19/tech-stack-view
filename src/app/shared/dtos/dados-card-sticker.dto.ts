export class DadosCardStickerDTO {

    titulo: string;
    valor: number;
    nivel: string;

    constructor(param?: any) {
        if (param) {
            this.titulo = param.titulo;
            this.valor = param.valor;
            this.nivel = param.nivel;
        }
    }
}