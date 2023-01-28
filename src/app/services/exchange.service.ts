import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
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
  constructor(private http: HttpClient) {}

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

    return this.http.get<string>(url, { params }).pipe(
      tap((res) => console.log(res)),
      map((res) => this.convertResponseToResult(res))
    );
  }

  private convertResponseToResult(response: any): ConvertResult {
    return {
      rate: response.info.rate,
      amount: response.query.amount,
      date: response.date,
      finalCurrency: response.query.to,
      originCurrency: response.query.from,
      result: response.result,
    };
  }
}
