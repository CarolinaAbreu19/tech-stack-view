import { Injectable } from "@angular/core";
import { TechStackService } from "../services/tech-stack.service";
import { map } from "rxjs/operators";
import { PreenchimentoTechStackDTO } from "src/app/shared/dtos/preenchimento-tech-stack.dto";

@Injectable({
    providedIn: 'root'
})
export class TechStackFacade {

    constructor(
        private techStackService: TechStackService
    ) {}

    obterTechStacks(): any {
        return this.techStackService.obterTechStacks().pipe(map(response => response));
    }
    
    obterDetalhesTechStack(idTechStack) {
        return this.techStackService.obterDetalhesTechStack(idTechStack).pipe(map(response => response));
    }

    obterPreenchimentoTechStack(idTechStack) {
        return this.techStackService.obterPreenchimentoTechStack(idTechStack).pipe(map(response => response));
    }

    salvarPreenchimentoTechStack(dto: PreenchimentoTechStackDTO) {
        return this.techStackService.salvarPreenchimentoTechStack(dto);
    }

}