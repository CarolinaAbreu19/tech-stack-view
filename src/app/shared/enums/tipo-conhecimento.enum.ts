import { EnumListBase } from "../models/enum-base.model";

export enum TipoConhecimentoEnum {
    Comum = 1,
    Especifico = 2,
}

export class TipoConhecimentoEnumList extends EnumListBase {
    constructor() {
        super([
            { id: 1, descricao: 'Comum' },
            { id: 2, descricao: 'Específico' },
        ]);
    }
}
