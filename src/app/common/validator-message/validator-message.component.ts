import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validator-message',
  templateUrl: './validator-message.component.html',
  styleUrls: ['./validator-message.component.styl']
})
export class ValidatorMessageComponent implements OnInit {

  @Input() control: FormControl;
  @Input() controlName: string;

  constructor() { }

  ngOnInit() {
  }

}
