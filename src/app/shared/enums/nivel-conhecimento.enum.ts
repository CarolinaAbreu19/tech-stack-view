import { EnumListBase } from "../models/enum-base.model";

export enum NivelConhecimentoEnum {
    Desconhecido = 1,
    Teorico = 2,
    Basico = 3,
    Intermediario = 4,
    Avancado = 5,
    Especialista = 6
}

export class NivelConhecimentoEnumList extends EnumListBase {
    constructor() {
        super([
            { id: 1, descricao: 'Desconhecido' },
            { id: 2, descricao: 'Teórico' },
            { id: 3, descricao: 'Básico' },
            { id: 4, descricao: 'Intermediário' },
            { id: 5, descricao: 'Avançado' },
            { id: 6, descricao: 'Especialista' },
        ]);
    }
}
