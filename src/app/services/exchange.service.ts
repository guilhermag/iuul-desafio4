import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ApiResponseSymbols, SymbolResponse } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  private readonly API_URL = 'https://api.exchangerate.host';
  constructor(private http: HttpClient) {}

  getSymbols() {
    const url = `${this.API_URL}/symbols`;
    return this.http.get<ApiResponseSymbols>(url).pipe(
      map((symbolResponse) => {
        return Object.values(symbolResponse.symbols);
      })
    );
  }

  convertCurrency() {
    const url = `${this.API_URL}/convert`;
    let params = new HttpParams()
      .set('from', 'USD')
      .set('to', 'EUR')
      .set('amount', '1200');

    return this.http.get<string>(url, { params }).pipe(
      tap((res) => console.log(res)),
      map((res) => res)
    );
  }
}
