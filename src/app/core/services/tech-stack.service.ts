import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PreenchimentoTechStackDTO } from "src/app/shared/dtos/preenchimento-tech-stack.dto";

@Injectable({
    providedIn: 'root'
})
export class TechStackService {

    private apiUrl = 'https://localhost:5001/api/TechStack'; // URL do seu backend

    constructor(
        private http: HttpClient
    ) { }

    obterTechStacks() {
        return this.http.get(`${this.apiUrl}/ObterTechStacks`);
    }
    obterDetalhesTechStack(idTechStack) {
        return this.http.get(`${this.apiUrl}/ObterDetalhesTechStack/${idTechStack}`);
    }
    obterPreenchimentoTechStack(idTechStack) {
        return this.http.get(`${this.apiUrl}/ObterPreenchimentoTechStack`, idTechStack);
    }
    salvarPreenchimentoTechStack(dto: PreenchimentoTechStackDTO) {
        return this.http.post(`${this.apiUrl}/SalvarPreenchimentoTechStack`, dto);
    }
}