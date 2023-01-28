import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SymbolResponse } from 'src/app/models/interfaces';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  tableColums: string[] = ['code', 'description'];
  symbolsRes!: SymbolResponse[];
  filterSymbols = new FormControl();

  dataTable: any;

  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};
  @ViewChild(MatSort) sort: MatSort = <MatSort>{};

  constructor(
    private exchangeService: ExchangeService,
    private liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    this.getSymbols();
  }

  getSymbols() {
    this.exchangeService.getSymbols().subscribe((res) => {
      this.symbolsRes = res;
      this.dataTable = new MatTableDataSource<SymbolResponse>(this.symbolsRes);
      this.dataTable.paginator = this.paginator;
      this.dataTable.sort = this.sort;
    });
  }

  announceSortChante(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(
        `Ordenados ${sortState.direction} finalizado`
      );
    } else {
      this.liveAnnouncer.announce(`Ordenação reiniciada`);
    }
  }

  filterData($event: any) {
    console.log($event.target.value);
    this.dataTable.filter = $event.target.value;
  }
}
