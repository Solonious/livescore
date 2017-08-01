import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker.component.html',
  styles: [`
      span {
          background: url('../../../../assets/calendar.png') center no-repeat;
          width: 24px;
      }
  `]
})
export class NgbdDatepickerPopup {
  @Output() getModel = new EventEmitter<Model>();
  model: Model;
  emmitData(data: Model): void {
    this.getModel.emit(data);
  }
}

export class Model {
  year: number;
  month: number;
  day: number;
}
