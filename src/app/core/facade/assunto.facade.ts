import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { AssuntoService } from "../services/assunto.service";

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

}