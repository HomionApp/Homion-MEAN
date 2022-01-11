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
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.css'],
})
export class OrderReviewComponent implements OnInit {
  @ViewChild('orderreview', { static: true }) modal!: ElementRef;
  @Output() output = new EventEmitter<boolean>();
  currentChefRate = 0;
  currentFoodRate = 0;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.modalService.open(this.modal, {
      modalDialogClass: 'modal-dialog-centered'
    }).result.catch(() => {
      this.closeModal();
    });
  }

  closeModal() {
    this.modalService.dismissAll();
    this.output.emit(false);
  }
}
