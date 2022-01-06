import { Component, OnInit } from '@angular/core';
import { ModalService } from '../service/modal-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private modalService : ModalService) { }

  ngOnInit(): void {
  }

  openModel(){
    this.modalService.open();     //to open the modal
  }
}
