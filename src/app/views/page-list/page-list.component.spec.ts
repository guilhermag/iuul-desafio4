import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SymbolResponse } from 'src/app/models/interfaces';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import {
  mockedSymbolApiResponse,
  mockedSymbolResult,
} from 'src/testing/mocks/exchange-api';
import { Sort } from '@angular/material/sort';

import { PageListComponent } from './page-list.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

fdescribe('PageListComponent', () => {
  let component: PageListComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<PageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageListComponent],
      imports: [
        AppMaterialModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(PageListComponent);
    component = fixture.componentInstance;

    spyOn(component['liveAnnouncer'], 'announce');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get symbols', fakeAsync(() => {
  //   component.getSymbols();
  //   // fixture.detectChanges();
  //   component.subscription$.unsubscribe();
  //   let response: SymbolResponse[];

  //   const request = httpTestingController.expectOne(
  //     `https://api.exchangerate.host/symbols`
  //   );
  //   expect(request.request.method).toEqual('GET');
  //   request.flush(mockedSymbolApiResponse);
  //   tick();
  // }));

  it('should filter data', () => {
    const mockEvent = { target: { value: 'filter' } };
    component.dataTable = new MatTableDataSource<SymbolResponse>(
      mockedSymbolResult
    );
    component.filterData(mockEvent);
    expect(component.dataTable.filter).toEqual(mockEvent.target.value);
  });

  it('should announce sort change when asc or desc', () => {
    const mockSort = { active: 'active', direction: 'asc' };
    component.announceSortChange(mockSort as Sort);
    expect(component['liveAnnouncer'].announce).toHaveBeenCalled();
  });

  it('should announce sort change when blank', () => {
    const mockSort = { active: 'active', direction: '' };
    component.announceSortChange(mockSort as Sort);
    expect(component['liveAnnouncer'].announce).toHaveBeenCalled();
  });
});
