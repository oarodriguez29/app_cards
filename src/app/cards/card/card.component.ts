import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']  
})
export class CardComponent implements OnInit {
  @Input() items: any[] = [];
  pageSize = 6;
  currentPage = 0;

  constructor() {}

  ngOnInit(): void {}

  get paginatedItems(): any[] {
    const startIndex = this.currentPage * this.pageSize;
    return this.items.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
  }

  title = 'Tarjetas Personales';

}
