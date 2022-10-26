import { Component, OnInit } from '@angular/core';
import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styles: [
  ]
})
export class CalendarComponent implements OnInit {

  date7: Date;
  dates: Date[];

  constructor() { }

  ngOnInit(): void {
  }

}
