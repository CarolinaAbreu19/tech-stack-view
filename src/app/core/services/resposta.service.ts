import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NovoAssuntoDTO } from "src/app/shared/dtos/novo-assunto.dto";
import { NovaRespostaDTO } from "src/app/shared/dtos/resposta.dto";
import { FiltroColaboradorDTO } from "src/app/shared/dtos/filtro-colaborador.dto";

@Injectable({
    providedIn: 'root'
})
export class RespostaService {

    private apiUrl = 'https://localhost:5001/api/Resposta'; // URL do seu backend

    constructor(
        private http: HttpClient
    ) { }
    
    criarNovaResposta(dto: NovaRespostaDTO) {
        return this.http.post(`${this.apiUrl}/criarNovaResposta`, dto);
    }
}