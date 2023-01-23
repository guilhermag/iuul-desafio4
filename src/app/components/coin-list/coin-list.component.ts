import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SymbolResponse } from 'src/app/models/interfaces';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css'],
})
export class CoinListComponent implements AfterViewInit {
  tableColums: string[] = ['code', 'description'];
  symbols: SymbolResponse[] = [];
  dataTable = new MatTableDataSource<SymbolResponse>(this.symbols);

  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  ngAfterViewInit() {
    this.dataTable.paginator = this.paginator;
  }

  constructor(private exchangeService: ExchangeService) {}

  ngOnInit(): void {
    this.exchangeService.getSymbols().subscribe((res) => {
      this.symbols = res;
    });
  }
}
