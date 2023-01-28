import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { REGEX_ONLY_NUMBERS } from 'src/app/models/constants';
import { ConvertResult, FormData } from 'src/app/models/interfaces';
import { ExchangeService } from 'src/app/services/exchange.service';
import { StorageDataService } from 'src/app/services/storage-data.service';

@Component({
  selector: 'app-convert-page',
  templateUrl: './convert-page.component.html',
  styleUrls: ['./convert-page.component.css'],
})
export class ConvertPageComponent implements OnInit {
  convertForm!: FormGroup;
  symbolList!: string[];
  searchResult = false;

  currencyControl = new FormControl('');
  filteredOriginCurrency!: Observable<any>;
  filteredFinalCurrency!: Observable<any>;

  convertResult = false;
  result: ConvertResult = {
    amount: 100,
    date: new Date().toLocaleDateString('pt-BR'),
    time: new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    }),
    originCurrency: 'BRL',
    finalCurrency: 'USD',
    rate: 0.2000678,
    result: 19.867,
  };

  constructor(
    private exchangeService: ExchangeService,
    private storageService: StorageDataService,
    private formBuilder: FormBuilder
  ) {}

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
    this.exchangeService
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

  convertCurrency() {
    const formValues: FormData = this.convertToFormData();
    this.searchResult = false;
    this.exchangeService
      .convertCurrency(
        formValues.originCurrency,
        formValues.finalCurrency,
        formValues.amount
      )
      .subscribe((result) => {
        this.result = result;
        this.storageService.addObjectToStorage(result);
        this.searchResult = true;
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
