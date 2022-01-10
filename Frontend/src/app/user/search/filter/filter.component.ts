import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output, ViewChild
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @ViewChild('filter', { static: true }) modal!: ElementRef;
  @Output() output = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.modalService.open(this.modal, {
      modalDialogClass: 'modal-dialog-centered',
    });
  }

  closeModal() {
    this.modalService.dismissAll();
    this.output.emit(false);
  }
}
