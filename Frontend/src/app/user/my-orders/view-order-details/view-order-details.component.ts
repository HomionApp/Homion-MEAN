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
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css'],
})
export class ViewOrderDetailsComponent implements OnInit {
  @ViewChild('orderdetails', { static: true }) modal!: ElementRef;
  @Output() output = new EventEmitter<void>();
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.modalService
      .open(this.modal, {
        modalDialogClass: 'modal-dialog-centered',
      })
      .result.then()
      .catch((err) => {
        this.closeModal();
      });
  }

  closeModal() {
    this.modalService.dismissAll();
    this.output.emit();
  }
}
