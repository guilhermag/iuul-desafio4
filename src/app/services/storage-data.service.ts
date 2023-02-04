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

  deleteItem(item: HistoryDataItem) {
    const data: HistoryDataItem[] = this.getSessionStorageData();
    if (data.length > 0) {
      const index = data.findIndex((element) => element.id === item.id);
      data.splice(index, 1);
      this.updateDataFromStorage(data);
    }
  }

  private convertToHistoryData(
    item: ConvertResult,
    data: HistoryDataItem[]
  ): HistoryDataItem {
    const lastPosition = data.length - 1;
    const id = data.length === 0 ? 1 : data[lastPosition].id + 1;

    return {
      id: id,
      amount: item.amount,
      date: item.date,
      time: item.time,
      originCurrency: item.originCurrency,
      finalCurrency: item.finalCurrency,
      rate: item.rate,
      result: item.result,
      actions: '',
      higherVale: item.higherValue,
    };
  }

  private updateDataFromStorage(data: HistoryDataItem[]) {
    sessionStorage.setItem('historyData', JSON.stringify(data));
  }
}
