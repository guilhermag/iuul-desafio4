import { Injectable } from '@angular/core';
import { ConvertResult, HistoryDataItem } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StorageDataService {
  constructor() {}

  addObjectToStorage(item: ConvertResult) {
    const historyData: HistoryDataItem[] = this.getSessionStorageData();
    historyData.push(this.convertToHistoryData(item, historyData));
    const stringData = JSON.stringify(historyData);
    sessionStorage.setItem('historyData', stringData);
  }

  getSessionStorageData(): HistoryDataItem[] {
    const sessionStorageData = sessionStorage.getItem('historyData');
    return sessionStorageData ? JSON.parse(sessionStorageData) : [];
  }

  private convertToHistoryData(
    item: ConvertResult,
    data: HistoryDataItem[]
  ): HistoryDataItem {
    const lastPosition = data.length - 1;
    const id = data.length === 0 ? 1 : data[lastPosition].id + 1;
    return { id: id, data: item };
  }
}
