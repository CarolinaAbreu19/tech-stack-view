import { Injectable } from "@angular/core";
import { TechStackService } from "../services/tech-stack.service";
import { map } from "rxjs/operators";
import { PreenchimentoTechStackDTO } from "src/app/shared/dtos/preenchimento-tech-stack.dto";
import { ColaboradorService } from "../services/colaborador.service";
import { FiltroColaboradorDTO } from "src/app/shared/dtos/filtro-colaborador.dto";

@Injectable({
    providedIn: 'root'
})
export class ColaboradorFacade {

    constructor(
        private colaboradorService: ColaboradorService
    ) {}

    obterColaboradores(filtro: FiltroColaboradorDTO): any {
        return this.colaboradorService.obterColaboradores(filtro).pipe(map(response => response));
    }

}