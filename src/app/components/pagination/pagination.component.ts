import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: [
  ]
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() urlEndPoint: string;
  @Input() pagination: any;
  pages: number[];
  from: number;
  to: number;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    let paginationUpdated = changes['pagination'];
    if (paginationUpdated.currentValue) {
      this.initPaginator();
    }
  }

  ngOnInit(): void {
    this.initPaginator();
  }

  private initPaginator() : void{
    this.from = Math.min(Math.max(1, this.pagination.number - 4), this.pagination.totalPages - 5);
    this.to = Math.max(Math.min(this.pagination.totalPages, this.pagination.number +4), 6);
    if(this.pagination.totalPages > 5){
      this.pages = new Array(this.to - this.from +1).fill(0).map((_value,index) => index + this.from);
    } else{
      this.pages = new Array(this.pagination.totalPages).fill(0).map((_value,index) => index + 1);
    }
  }

}
