import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
import {
  mockedSymbolApiResponse,
  mockedConverResult,
  mockedSymbolResult,
  mockedConvertApiResponse,
  mockedConvertHigherApiResponse,
} from 'src/testing/mocks/exchange-api';
import { ConvertResult, SymbolResponse } from '../models/interfaces';

import { ExchangeService } from './exchange.service';

describe('ExchangeService', () => {
  let service: ExchangeService;
  let httpTestingController: HttpTestingController;
  const API_URL = 'https://api.exchangerate.host';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExchangeService],
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get symbols', fakeAsync(() => {
    let response: SymbolResponse[];
    service.getSymbols().subscribe((res) => {
      response = res;
      expect(response).toEqual(mockedSymbolResult);
    });
    const request = httpTestingController.expectOne(`${API_URL}/symbols`);
    expect(request.request.method).toEqual('GET');
    request.flush(mockedSymbolApiResponse);
    tick();
  }));

  it('should convert currency', fakeAsync(() => {
    const mockedParams = {
      originCurrency: 'BRL',
      finalCurrency: 'USD',
      amount: '200',
    };
    service
      .convertCurrency(
        mockedParams.originCurrency,
        mockedParams.finalCurrency,
        mockedParams.amount
      )
      .subscribe((res) => {
        expect(res).toEqual(mockedConverResult);
      });

    const request = httpTestingController.expectOne(
      `${API_URL}/convert?from=${mockedParams.originCurrency}&to=${mockedParams.finalCurrency}&amount=${mockedParams.amount}`
    );
    expect(request.request.method).toEqual('GET');
    request.flush(mockedConvertApiResponse);
    tick();
  }));

  it('should update item.higherValue to false if item.amount is less than 10000 USD and item.originCurrency is USD', fakeAsync(() => {
    const mock = Object.create(mockedConverResult);
    mock.originCurrency = 'USD';
    mock.higherValue = true;

    service
      .updateForHigherValuesUSD(mock)
      .subscribe((res) => expect(res.higherValue).toBeFalse());
    tick();
  }));

  it('should update item.higherValue to true if item.amount is higher than 10000 USD and item.originCurrency is USD', fakeAsync(() => {
    const mock = Object.create(mockedConverResult);
    mock.originCurrency = 'USD';
    mock.amount = 11000;
    service
      .updateForHigherValuesUSD(mock)
      .subscribe((res) => expect(res.higherValue).toBeTrue());
    tick();
  }));

  it('should update item.higherValue to false if item.amount is less than 10000 USD and item.originCurrency is not USD', fakeAsync(() => {
    const mock = Object.create(mockedConverResult);
    mock.higherValue = true;
    const mockedParams = {
      originCurrency: 'BRL',
      finalCurrency: 'USD',
      amount: '100',
    };

    service
      .updateForHigherValuesUSD(mock)
      .subscribe((res) => expect(res.higherValue).toBeFalse());

    const request = httpTestingController.expectOne(
      `${API_URL}/convert?from=${mockedParams.originCurrency}&to=${mockedParams.finalCurrency}&amount=${mockedParams.amount}`
    );
    expect(request.request.method).toEqual('GET');
    request.flush(mockedConvertApiResponse);
    tick();
  }));

  it('should update item.higherValue to true if item.amount is higher than 10000 USD and item.originCurrency is not USD', fakeAsync(() => {
    const mock = Object.create(mockedConverResult);
    mock.amount = 110000;
    const mockedParams = {
      originCurrency: 'BRL',
      finalCurrency: 'USD',
      amount: '110000',
    };

    service
      .updateForHigherValuesUSD(mock)
      .subscribe((res) => expect(res.higherValue).toBeTrue());

    const request = httpTestingController.expectOne(
      `${API_URL}/convert?from=${mockedParams.originCurrency}&to=${mockedParams.finalCurrency}&amount=${mockedParams.amount}`
    );
    expect(request.request.method).toEqual('GET');
    request.flush(mockedConvertHigherApiResponse);
    tick();
  }));
});
