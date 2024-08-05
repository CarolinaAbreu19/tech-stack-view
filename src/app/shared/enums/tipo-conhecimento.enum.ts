import { EnumListBase } from "../models/enum-base.model";

export enum TipoConhecimentoEnum {
    Especifico = 1,
    Comum = 2,
}

export class TipoConhecimentoEnumList extends EnumListBase {
    constructor() {
        super([
            { id: 1, descricao: 'Específico' },
            { id: 2, descricao: 'Comum' },
        ]);
    }
}
