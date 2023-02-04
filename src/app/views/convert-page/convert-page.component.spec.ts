import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExchangeService } from 'src/app/services/exchange.service';
import { StorageDataService } from 'src/app/services/storage-data.service';
import { AppMaterialModule } from 'src/app/shared/app-material.module';

import { ConvertPageComponent } from './convert-page.component';

describe('ConvertPageComponent', () => {
  let component: ConvertPageComponent;
  let fixture: ComponentFixture<ConvertPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [ExchangeService, StorageDataService],
      declarations: [ConvertPageComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();

    fixture = TestBed.createComponent(ConvertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.subSymbols$.unsubscribe();
  });

  it('should convertCurrency', () => {
    component.convertCurrency();
  });

  it('should close result', () => {
    component.closeResult();
    expect(component.convertResult).toBeFalse();
  });

  it('should get symbols for subSymbols$', () => {
    component.subSymbols$;
  });
});
