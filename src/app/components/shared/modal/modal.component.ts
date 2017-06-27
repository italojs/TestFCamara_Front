import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DataService } from './../../../services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  providers: [DataService]
})
export class ModalComponent implements OnInit {
  public segmentList: any[];
  public form: FormGroup;
  public errors: any[] = [];
  public alertTitle: string;
  @Input() public action: string;
  @Input() public modalTitle: string;
  @Input() public segment: string;

  constructor(private formBuilder: FormBuilder, private service: DataService) {
    this.form = this.formBuilder.group({
      id: null,
      title: ['', Validators.required],
    });
  }
  ngOnInit() {
  }

  // save() {
  //   if (this.action == 'Add') {
  //     console.log(this.form.value)
  //     this.service.createSegment(this.form.value).subscribe(
  //       result => {
  //         this.Segment.getSegmentList();
  //         this.closeModal();
  //       },
  //       error => { this.errors = JSON.parse(error._body).errors; }
  //     );
  //   }
  //   if (this.action == 'Edit') {
  //     console.log(this.form.value)
  //     this.service.updateSegment(this.form.value).subscribe(
  //       result => {
  //         this.Segment.getSegmentList();
  //         this.closeModal();
  //       },
  //       error => { this.errors = JSON.parse(error._body).errors; }
  //     );
  //   }
  // }
  // openAlert(title: string) {
  //   this.alertTitle = title;
  //   this.ui.setActive('alert');
  // }
  // closeAlert() {
  //   this.alertTitle = '';
  //   this.ui.setInactive('alert');
  // }
  // openModal(title: string, action: string) {
  //   this.errors = [];
  //   this.modalTitle = title;
  //   this.action = action;
  //   this.ui.setActive('modal');
  // }
  // closeModal() {
  //   this.errors = [];
  //   this.ui.setInactive('modal');
  //   this.form.reset();
  // }
}
