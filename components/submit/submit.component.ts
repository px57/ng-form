import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  @Input() ComponentForm: FormGroup;
  @Input() submit_loading: boolean;
  @Input() value:string = 'Valider';
  @Input() list_class_name: string = '';
  @Input() parentClass: string = ``;

  /*
  * @description:
  */
  public constructor() { }

  /*
  * @description:
  */
  public ngOnInit(): void {
    // alert(this.ComponentForm.valid)
  }
}
