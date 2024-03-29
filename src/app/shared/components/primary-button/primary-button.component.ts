import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent implements OnInit {
  @Input() iconName: string = 'add';
  
  constructor() { }

  ngOnInit() {}

}
