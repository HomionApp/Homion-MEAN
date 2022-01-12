import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css'],
})
export class ConfirmModalComponent implements OnInit {
  
  @ViewChild('confirmModal', { static: true }) modal!: ElementRef;
  @Input() message!: string;
  @Output() cancelled = new EventEmitter<void>();
  @Output() confirmed = new EventEmitter<void>();

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.modalService.open(this.modal, { size: 'sm' });
  }

  cancel() {
    this.modalService.dismissAll();
    this.cancelled.emit();
  }

  confirm() {
    this.modalService.dismissAll();
    this.cancelled.emit();
  }
}
