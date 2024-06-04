import { Injectable } from "@angular/core";
import { TechStackService } from "../services/tech-stack.service";
import { map } from "rxjs/operators";

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

}