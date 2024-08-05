import { AreaConhecimentoDTO } from "./area-conhecimento.dto";
import { RespostasTechStackDTO } from "./respostas-tech-stack.dto";

export class InformacoesTechStackDTO {

    id: number;
    nome: string;
    area: string;
    detalhes: string;
    responsaveis: string;
    dataCriacao: Date;
    respostas: RespostasTechStackDTO;
    areasConhecimento: AreaConhecimentoDTO[];

    constructor(param?: any) {
        if (param) {
            this.id = param.id;
            this.nome = param.nome;
            this.area = param.area;
            this.detalhes = param.detalhes;
            this.responsaveis = param.responsaveis;
            this.dataCriacao = param.dataCriacao;
            this.respostas = param.respostas;
            this.areasConhecimento = param.areasConhecimento;
        }
    }
}