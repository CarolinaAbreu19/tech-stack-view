import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PreenchimentoTechStackDTO } from "src/app/shared/dtos/preenchimento-tech-stack.dto";
import { FiltroColaboradorDTO } from "src/app/shared/dtos/filtro-colaborador.dto";

@Injectable({
    providedIn: 'root'
})
export class ColaboradorService {

    private apiUrl = 'https://localhost:5001/api/Colaborador'; // URL do seu backend

    constructor(
        private http: HttpClient
    ) { }

    obterColaboradores(filtro: FiltroColaboradorDTO) {
        return this.http.post(`${this.apiUrl}/ObterColaboradores`, filtro);
    }
}