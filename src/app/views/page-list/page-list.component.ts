import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
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

  dataTable: any;

  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  constructor(private exchangeService: ExchangeService) {}

  ngOnInit(): void {
    this.getSymbols();
  }

  getSymbols() {
    this.exchangeService.getSymbols().subscribe((res) => {
      this.symbolsRes = res;
      this.dataTable = new MatTableDataSource<SymbolResponse>(this.symbolsRes);
      this.dataTable.paginator = this.paginator;
    });
  }
}
