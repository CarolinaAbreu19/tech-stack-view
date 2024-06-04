import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

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
}