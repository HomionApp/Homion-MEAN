import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-order-details-modal',
  templateUrl: './order-details-modal.component.html',
  styleUrls: ['./order-details-modal.component.css'],
})
export class OrderDetailsModalComponent implements OnInit {
  @ViewChild('orderDetailsModal', { static: true }) modalRef!: ElementRef;
  @Output() closeModal = new EventEmitter<void>();

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.modalService
      .open(this.modalRef)
      .result.then((result) => {
        // console.log(result);
      })
      .catch((err) => {
        // console.log(err);
      });
  }
  onClose(){
    this.modalService.dismissAll();
    this.closeModal.emit();
  }
}
