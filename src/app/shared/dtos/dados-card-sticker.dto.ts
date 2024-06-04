export class DadosCardStickerDTO {

    titulo: string | undefined;
    valor: number | undefined;
    nivel: string | undefined;

    constructor(param?: any) {
        if (param) {
            this.titulo = param.titulo;
            this.valor = param.valor;
            this.nivel = param.nivel;
        }
    }
}