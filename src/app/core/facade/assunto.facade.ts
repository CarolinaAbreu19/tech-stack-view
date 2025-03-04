import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { AssuntoService } from "../services/assunto.service";
import { NovoAssuntoDTO } from "src/app/shared/dtos/novo-assunto.dto";

@Injectable({
    providedIn: 'root'
})
export class AssuntoFacade {

    constructor(
        private assuntoService: AssuntoService
    ) {}

    obterAssuntosPorAreaConhecimento(idAreaConhecimento: number): any {
        return this.assuntoService.obterAssuntosPorAreaConhecimento(idAreaConhecimento).pipe(map(response => response));
    }
    
    criarNovoAssunto(dto: NovoAssuntoDTO): any {
        return this.assuntoService.criarNovoAssunto(dto);
    }

    editarAssunto(dto: NovoAssuntoDTO): any {
        return this.assuntoService.editarAssunto(dto);
    }

    excluirAssunto(idAssunto: number) {
        return this.assuntoService.excluirAssunto(idAssunto);
    }

}