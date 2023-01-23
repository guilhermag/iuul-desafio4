import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SymbolResponse } from 'src/app/models/interfaces';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  public symbols$!: Observable<SymbolResponse[]>;
  symbolList: SymbolResponse[] = [{ description: '', code: '' }];

  constructor(private exchangeService: ExchangeService) {}

  ngOnInit(): void {
    this.symbols$ = this.exchangeService.getSymbols();
  }
}
