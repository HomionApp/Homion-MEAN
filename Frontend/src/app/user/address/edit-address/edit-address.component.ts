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
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css'],
})
export class EditAddressComponent implements OnInit {
  @ViewChild('editaddress', { static: true }) modal!: ElementRef;
  @Output() output = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.modalService
      .open(this.modal, { modalDialogClass: 'modal-dialog-centered' })
      .result.then((result) => {
        console.log(result);
      })
      .catch((err) => {
        this.closeModal();
      });
  }

  closeModal() {
    this.modalService.dismissAll();
    this.output.emit(false);
  }
}
