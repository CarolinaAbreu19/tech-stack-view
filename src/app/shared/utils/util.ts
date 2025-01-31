import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

export class Util {
    /**
     * * Abre o modal.
     * @param modalService Serviço do modal.
     * @param component O componente a ser aberto.
     * @param size O tamanho do modal (lg, xl, sm). Defaul: md.
     */
    static openModal(modalService: NgbModal, component: any, size: 'sm' | 'md' | 'lg' | 'xl' = 'lg') {
        const modalRef = modalService.open(
            component,
            {
                backdrop: 'static',
                size,
                keyboard: false,
            }
        );
        return modalRef;
    }
}