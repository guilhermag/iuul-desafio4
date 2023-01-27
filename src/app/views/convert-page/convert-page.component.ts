import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { ConvertResult } from 'src/app/models/interfaces';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-convert-page',
  templateUrl: './convert-page.component.html',
  styleUrls: ['./convert-page.component.css'],
})
export class ConvertPageComponent implements OnInit {
  convertForm!: FormGroup;

  originCurrency = new FormControl('');
  finalCurrency = new FormControl('');
  filteredCurrencyOrigin!: Observable<string[]>;
  filteredCurrencyFinal!: Observable<string[]>;
  convertResult = false;
  result: ConvertResult = {
    amount: 100,
    date: new Date().toISOString(),
    from: 'BRL',
    to: 'USD',
    rate: 0.2000678,
    result: 19.867,
  };

  constructor(
    private exchangeService: ExchangeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.convertForm = this.formBuilder.group({
      originCurrency: ['BRL'],
      finalCurrency: ['USD'],
      amount: ['10'],
    });
    this.exchangeService.convertCurrency().subscribe();
    // this.filteredCurrencyOrigin = this.originCurrency.valueChanges.pipe(
    //   startWith(''),
    //   map()
    // );
  }

  convertCurrency() {
    console.log(this.convertForm.value);
    this.convertResult = true;
  }

  closeResult() {
    this.convertResult = false;
  }
}
