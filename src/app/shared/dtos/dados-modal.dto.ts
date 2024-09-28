export class DadosModalDTO {

    titulo: string;
    subtitulo: string;
    tamanhoModal: string;

    constructor(param?: any) {
        if (param) {
            this.titulo = param.titulo;
            this.subtitulo = param.subtitulo;
            this.tamanhoModal = param.tamanhoModal;
        }
    }
}