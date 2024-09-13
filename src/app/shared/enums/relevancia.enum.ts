import { EnumListBase } from "../models/enum-base.model";

export enum RelevanciaEnum {
    Baixa = 1,
    Normal = 2,
    Alta = 3
}

export class RelevanciaEnumList extends EnumListBase {
    constructor() {
        super([
            { id: 1, descricao: 'Baixa' },
            { id: 2, descricao: 'Normal' },
            { id: 3, descricao: 'Alta' },
        ]);
    }
}
