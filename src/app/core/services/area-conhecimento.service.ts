import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NovaAreaConhecimentoDTO } from "src/app/shared/dtos/nova-area-conhecimento.dto";

@Injectable({
    providedIn: 'root'
})
export class AreaConhecimentoService {

    private apiUrl = 'https://localhost:5001/api/AreaConhecimento'; // URL do seu backend

    constructor(
        private http: HttpClient
    ) { }
    
    criarNovaAreaConhecimento(dto: NovaAreaConhecimentoDTO) {
        return this.http.post(`${this.apiUrl}/CriarNovaAreaConhecimento`, dto);
    }
}