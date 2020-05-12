import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() value: number;
  @Input() max: number;
  @Input() min: number;
  @Input() step: number;
  @Input() info: String;
  @Input() disabled: String;
  @Output() valueChanged: EventEmitter<any> = new EventEmitter();
  @Output() inputChanged: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onInputChange(event: any) {
    this.valueChanged.emit(event.value);
  }

  onClicked(event: any, value: number) {
    this.inputChanged.emit(value);
  }

}
