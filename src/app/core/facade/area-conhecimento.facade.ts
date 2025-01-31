import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { AssuntoService } from "../services/assunto.service";
import { NovoAssuntoDTO } from "src/app/shared/dtos/novo-assunto.dto";
import { NovaAreaConhecimentoDTO } from "src/app/shared/dtos/nova-area-conhecimento.dto";
import { AreaConhecimentoService } from "../services/area-conhecimento.service";

@Injectable({
    providedIn: 'root'
})
export class AreaConhecimentoFacade {

    constructor(
        private areaConhecimentoService: AreaConhecimentoService
    ) {}
    
    criarNovaAreaConhecimento(dto: NovaAreaConhecimentoDTO): any {
        return this.areaConhecimentoService.criarNovaAreaConhecimento(dto);
    }
    
    editarAreaConhecimento(dto: NovaAreaConhecimentoDTO): any {
        return this.areaConhecimentoService.editarAreaConhecimento(dto);
    }

    excluirAreaConhecimento(idArea: number) {
        return this.areaConhecimentoService.excluirAreaConhecimento(idArea);
    }

}