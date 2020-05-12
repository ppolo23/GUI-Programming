import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-slider-toggle',
  templateUrl: './slider-toggle.component.html',
  styleUrls: ['./slider-toggle.component.css']
})
export class SliderToggleComponent implements OnInit {

  @Input() checked: boolean;
  @Output() toggleChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ontoggleChange(event: any) {
    this.toggleChange.emit(event.checked);
  }

}
