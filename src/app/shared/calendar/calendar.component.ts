import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styles: [
  ]
})
export class CalendarComponent implements OnInit {

  @Input() date7: Date;
  dates: Date[];

  constructor() { }

  ngOnInit(): void {
  }

}
