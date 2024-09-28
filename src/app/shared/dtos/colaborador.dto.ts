export class ColaboradorDTO {

    id: number;
    nome: string;
    email: string;
    perfil: string;

    constructor(param?: any) {
        if (param) {
            this.id = param.id;
            this.nome = param.nome;
            this.email = param.email;
            this.perfil = param.perfil;
        }
    }
}