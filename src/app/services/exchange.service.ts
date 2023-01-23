import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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
}
