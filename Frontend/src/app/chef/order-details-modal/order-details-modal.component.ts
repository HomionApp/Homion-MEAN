import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-details-modal',
  templateUrl: './order-details-modal.component.html',
  styleUrls: ['./order-details-modal.component.css'],
})
export class OrderDetailsModalComponent implements OnInit {
  @ViewChild('orderDetailsModal', { static: true }) modalRef!: ElementRef;
  @Output() closeModal = new EventEmitter<void>();

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.modalService
      .open(this.modalRef, { modalDialogClass: 'modal-dialog-centered' })
      .result.then((result) => {})
      .catch((err) => {});
  }
  onClose() {
    this.modalService.dismissAll();
    this.closeModal.emit();
  }
}
