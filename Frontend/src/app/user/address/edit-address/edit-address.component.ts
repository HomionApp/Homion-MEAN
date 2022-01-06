import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css'],
})
export class EditAddressComponent implements OnInit {
  @ViewChild('editaddress', { static: true }) modal!: ElementRef;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.modalService
      .open(this.modal)
      .result.then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
