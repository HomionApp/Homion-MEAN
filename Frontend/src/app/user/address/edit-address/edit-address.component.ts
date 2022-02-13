import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GeneralService } from 'src/app/general.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css'],
})
export class EditAddressComponent implements OnInit {
  @ViewChild('editaddress', { static: true }) modal!: ElementRef;
  @Output() output = new EventEmitter<boolean>();
  @Input() addressId!: string;
  areas: { [id: string]: any } = {};
  isLoading = false;
  isEditMode = false;

  form = new FormGroup({
    homeNo: new FormControl(null, [Validators.required, Validators.min(1)]),
    society: new FormControl('', Validators.required),
    landmark: new FormControl('', Validators.required),
    pincode: new FormControl({ value: null, disabled: true }),
    addressType: new FormControl('HOME', Validators.required),
    areaId: new FormControl(null, Validators.required),
  });

  constructor(
    private generalService: GeneralService,
    private userService: UserService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.modalService
      .open(this.modal, { modalDialogClass: 'modal-dialog-centered' })
      .result.then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    if (this.addressId.length > 0) {
      this.isEditMode = true;
      this.getAddressById();
    }

    this.getAreas();
  }

  getAreas() {
    this.isLoading = true;
    this.generalService.getAreas().subscribe((res) => {
      if (res.status == 200) {
        res.data.forEach(
          (area: any) =>
            (this.areas[area._id] = { name: area.name, pincode: area.pincode })
        );
        if (!this.isEditMode) {
          this.form.patchValue({
            areaId: res.data[0]?._id,
            pincode: res.data[0]?.pincode,
          });
        }
        this.isLoading = false;
      }
    });
  }

  saveAddress() {
    if (this.isEditMode) {
      this.editAddress();
    } else {
      this.addNewAddress();
    }
  }

  addNewAddress() {
    if (this.form.valid) {
      const address = {
        ...this.form.value,
        pincode: this.form.controls['pincode'].value,
      };
      this.userService.saveAddress(address).subscribe((res) => {
        if (res.status === 201) {
          console.log(res);
          this.modalService.dismissAll();
          this.output.emit(true);
        }
      });
    }
  }

  editAddress() {
    if (this.form.valid) {
      const address = {
        ...this.form.value,
        pincode: this.form.controls['pincode'].value,
        addressId: this.addressId,
      };
      this.userService.editAddress(address).subscribe((res) => {
        if (res.status === 201) {
          console.log(res);
          this.modalService.dismissAll();
          this.output.emit(true);
        }
      });
    }
  }

  getAddressById() {
    this.userService.getAddressById(this.addressId).subscribe((res) => {
      if (res.status == 200) {
        const address = res.data;
        this.form.setValue({
          homeNo: address.homeNo,
          society: address.society,
          landmark: address.landmark,
          pincode: address.pincode,
          addressType: address.addressType,
          areaId: address.areaId,
        });
      }
    });
  }

  closeModal() {
    this.modalService.dismissAll();
    this.output.emit(false);
  }
}
