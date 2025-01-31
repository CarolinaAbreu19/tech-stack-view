import { Injectable } from "@angular/core";
import { RespostaService } from "../services/resposta.service";
import { NovaRespostaDTO } from "src/app/shared/dtos/resposta.dto";

@Injectable({
    providedIn: 'root'
})
export class RespostaFacade {

    constructor(
        private respostaService: RespostaService
    ) {}
    
    criarNovaResposta(dto: NovaRespostaDTO): any {
        return this.respostaService.criarNovaResposta(dto);
    }

}