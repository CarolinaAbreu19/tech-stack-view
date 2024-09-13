import { Enum } from "../types/enum.type";

export class EnumListBase {

    private enum: Enum[];

    constructor(enumParam: Enum[]) {
        this.enum = enumParam;
    }

    getAll(): Enum[] {
        return this.enum;
    }

    getAllButOne(id: number): Enum[] {
      return this.enum.filter(x => x.id !== id);
    }

    getAllForSelect(): Enum[] {
        const list = [...this.enum];
        list.unshift(({ descricao: '-', id: '' }));
        return list;
    }

    getById(id: string | number): Enum {
        return this.enum.find((item: Enum) => item.id === id);
    }

    getId(descricao: string) {
        const result = this.enum.find((item: Enum) => item.descricao === descricao);
        return result ? result.id : null;
    }

    getDescription(id: string | number) {
        const result = this.enum.find((item: Enum) => item.id === id);
        return result ? result.descricao : null;
    }

}