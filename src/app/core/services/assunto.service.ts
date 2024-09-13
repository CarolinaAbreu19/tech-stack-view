import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AssuntoService {

    private apiUrl = 'https://localhost:5001/api/Assunto'; // URL do seu backend

    constructor(
        private http: HttpClient
    ) { }

    obterAssuntosPorAreaConhecimento(idAreaConhecimento: number) {
        return this.http.get(`${this.apiUrl}/ObterAssuntosPorAreaConhecimento/${idAreaConhecimento}`);
    }
}