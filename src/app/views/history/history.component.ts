import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConvertResult, HistoryDataItem } from 'src/app/models/interfaces';

import { StorageDataService } from 'src/app/services/storage-data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements AfterViewInit {
  tableColums: string[] = [
    'date',
    'time',
    'rate',
    'amount',
    'finalCurrency',
    'originCurrency',
    'result',
    'actions',
  ];

  historyData: HistoryDataItem[] = this.storageService.getSessionStorageData();

  dataTable = new MatTableDataSource<HistoryDataItem>(this.historyData);

  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};
  @ViewChild(MatSort) sort: MatSort = <MatSort>{};

  constructor(
    private storageService: StorageDataService,
    private liveAnnouncer: LiveAnnouncer
  ) {}

  ngAfterViewInit() {
    this.dataTable.paginator = this.paginator;
    this.dataTable.sort = this.sort;
  }

  announceSortChante(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(
        `Ordenados ${sortState.direction} finalizado`
      );
    } else {
      this.liveAnnouncer.announce(`Ordenação reiniciada`);
    }
  }

  deleteItem(item: HistoryDataItem) {
    this.storageService.deleteItem(item);
    this.historyData = this.storageService.getSessionStorageData();
    this.dataTable.data = this.historyData;
  }
}
