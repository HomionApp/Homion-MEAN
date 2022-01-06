import { Injectable, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailsModalComponent } from '../order-details-modal/order-details-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  @Input() name : any;
  
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) {}

  open() {
    const modalRef = this.modalService.open(OrderDetailsModalComponent);
    modalRef.componentInstance.name = 'World';
  }
}
