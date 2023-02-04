import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subscription, tap } from 'rxjs';
import {
  ApiResponse,
  ApiResponseSymbols,
  ConvertResult,
  SymbolResponse,
} from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  private readonly API_URL = 'https://api.exchangerate.host';
  subscription$: Subscription;

  constructor(private http: HttpClient) {
    this.subscription$ = Subscription.EMPTY;
  }

  getSymbols(): Observable<SymbolResponse[]> {
    const url = `${this.API_URL}/symbols`;
    return this.http.get<ApiResponseSymbols>(url).pipe(
      map((symbolResponse) => {
        return Object.values(symbolResponse.symbols);
      })
    );
  }

  convertCurrency(
    originCurrency: string,
    finalCurrency: string,
    amount: string
  ): Observable<ConvertResult> {
    const url = `${this.API_URL}/convert`;
    let params = new HttpParams()
      .set('from', originCurrency)
      .set('to', finalCurrency)
      .set('amount', amount);

    return this.http
      .get<ApiResponse>(url, { params })
      .pipe(map((res) => this.convertResponseToResult(res)));
  }

  updateForHigherValuesUSD(
    item: ConvertResult,
    valueCheck: number = 10000
  ): Observable<ConvertResult> {
    if (item.originCurrency === 'USD') {
      item.amount >= valueCheck
        ? (item.higherValue = true)
        : (item.higherValue = false);
      return new Observable((sub) => sub.next(item));
    } else {
      return this.convertCurrency(
        item.originCurrency,
        'USD',
        item.amount.toString()
      ).pipe(
        map((res) => {
          res.amount >= valueCheck
            ? (item.higherValue = true)
            : (item.higherValue = false);
          return item;
        })
      );
    }
  }

  private convertResponseToResult(response: ApiResponse): ConvertResult {
    return {
      rate: response.info.rate,
      amount: response.query.amount,
      date: new Date().toLocaleDateString('pt-BR'),
      time: new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      finalCurrency: response.query.to,
      originCurrency: response.query.from,
      result: response.result,
      higherValue: false,
    };
  }
}
