import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { map, Observable, Subscription } from 'rxjs';
import { CONVERT_RESULT, REGEX_ONLY_NUMBERS } from 'src/app/models/constants';
import { ConvertResult, FormData } from 'src/app/models/interfaces';
import { ExchangeService } from 'src/app/services/exchange.service';
import { StorageDataService } from 'src/app/services/storage-data.service';

@Component({
  selector: 'app-convert-page',
  templateUrl: './convert-page.component.html',
  styleUrls: ['./convert-page.component.css'],
})
export class ConvertPageComponent implements OnInit, OnDestroy {
  convertForm!: FormGroup;
  symbolList!: string[];
  searchResult = false;
  subSymbols$: Subscription;
  subConvert$: Subscription;
  subscriptions: Subscription[] = [];

  currencyControl = new FormControl('');
  filteredOriginCurrency!: Observable<string[]>;
  filteredFinalCurrency!: Observable<string[]>;

  convertResult = false;
  result: ConvertResult = CONVERT_RESULT;

  constructor(
    private exchangeService: ExchangeService,
    private storageService: StorageDataService,
    private formBuilder: FormBuilder
  ) {
    this.subSymbols$ = Subscription.EMPTY;
    this.subConvert$ = Subscription.EMPTY;
  }

  ngOnInit() {
    this.convertForm = this.formBuilder.group({
      originCurrency: ['Brazilian Real (BRL)', Validators.required],
      finalCurrency: ['United States Dollar (USD)', Validators.required],
      amount: [
        '10',
        Validators.compose([
          Validators.required,
          Validators.pattern(REGEX_ONLY_NUMBERS),
        ]),
      ],
    });
    this.subSymbols$ = this.exchangeService
      .getSymbols()
      .pipe(
        map((res) =>
          res.map(
            (symbolCurrency) =>
              `${symbolCurrency.description} (${symbolCurrency.code})`
          )
        )
      )
      .subscribe((response) => (this.symbolList = response));
    this.filteredOriginCurrency = this.convertForm
      .get('originCurrency')!
      .valueChanges.pipe(map((filter) => this.filterSymbols(filter || '')));
    this.filteredFinalCurrency = this.convertForm
      .get('finalCurrency')!
      .valueChanges.pipe(map((filter) => this.filterSymbols(filter || '')));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  convertCurrency() {
    const formValues: FormData = this.convertToFormData();
    this.searchResult = false;
    this.subConvert$ = this.exchangeService
      .convertCurrency(
        formValues.originCurrency,
        formValues.finalCurrency,
        formValues.amount
      )
      .subscribe((result) => {
        this.exchangeService
          .updateForHigherValuesUSD(result)
          .subscribe((resultUpdated) => {
            this.result = resultUpdated;
            this.storageService.addObjectToStorage(resultUpdated);
            this.searchResult = true;
          });
      });
    this.convertResult = true;
  }

  closeResult() {
    this.convertResult = false;
  }

  private filterSymbols(filter: string): string[] {
    const filterValue = filter.toLocaleLowerCase();
    const symbolList = this.symbolList;
    return symbolList.filter((symbolRes) =>
      symbolRes.toLocaleLowerCase().includes(filterValue)
    );
  }

  private convertToFormData(): FormData {
    const formValues: FormData = this.convertForm.value;

    // gets the position of the currency symbol in the string
    const stringSize = {
      originSymbolBegin: formValues.originCurrency.length - 4,
      originSymbolEnd: formValues.originCurrency.length - 1,
      finalSymbolBegin: formValues.finalCurrency.length - 4,
      finalSymbolEnd: formValues.finalCurrency.length - 1,
    };

    formValues.originCurrency = formValues.originCurrency.slice(
      stringSize.originSymbolBegin,
      stringSize.originSymbolEnd
    );

    formValues.finalCurrency = formValues.finalCurrency.slice(
      stringSize.finalSymbolBegin,
      stringSize.finalSymbolEnd
    );
    this.convertForm.patchValue([{ originCurrency: 'brl' }]);

    return formValues;
  }
}
