import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ConvertResult, HistoryDataItem } from 'src/app/models/interfaces';

import { StorageDataService } from 'src/app/services/storage-data.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements AfterViewInit, OnDestroy {
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
  subscription$: Subscription;

  historyData: HistoryDataItem[] = this.storageService.getSessionStorageData();

  dataTable = new MatTableDataSource<HistoryDataItem>(this.historyData);

  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};
  @ViewChild(MatSort) sort: MatSort = <MatSort>{};

  constructor(
    private storageService: StorageDataService,
    private liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ) {
    this.subscription$ = Subscription.EMPTY;
  }

  ngAfterViewInit() {
    this.dataTable.paginator = this.paginator;
    this.dataTable.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(
        `Ordenados ${sortState.direction} finalizado`
      );
    } else {
      this.liveAnnouncer.announce(`Ordenação reiniciada`);
    }
  }

  openDialog(item: HistoryDataItem) {
    const dialogRef = this.dialog.open(DialogComponent);
    this.subscription$ = dialogRef.afterClosed().subscribe((deleteItem) => {
      if (deleteItem) {
        this.deleteItem(item);
      }
    });
  }

  deleteItem(item: HistoryDataItem) {
    this.storageService.deleteItem(item);
    this.historyData = this.storageService.getSessionStorageData();
    this.dataTable.data = this.historyData;
  }
}
