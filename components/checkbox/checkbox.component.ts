import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {
  @Input()
  public state: boolean;
  public isMultiple: boolean;

  @Input()
  public type: 'checkbox' | 'checkbox_circle' = 'checkbox';

  constructor() {}

  ngOnInit(): void {}

  public toggleState(): void {
    this.state = !this.state;
  }
}
