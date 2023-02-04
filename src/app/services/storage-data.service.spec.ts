import { TestBed } from '@angular/core/testing';

import { StorageDataService } from './storage-data.service';
import { mockedConverResult } from 'src/testing/mocks/exchange-api';
import { ConvertResult, HistoryDataItem } from '../models/interfaces';

describe('StorageDataService', () => {
  let service: StorageDataService;
  let storage = {} as any;
  let mockedItem: ConvertResult;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [StorageDataService] });
    service = TestBed.inject(StorageDataService);
    mockedItem = Object.create(mockedConverResult);

    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in storage ? storage[key] : null;
      },
      setItem: (key: string, value: string) => {
        storage[key] = `${value}`;
      },
    };
    storage = {};

    spyOn(sessionStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(sessionStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add data to the session storage', () => {
    service.addObjectToStorage(mockedItem);
    const mockedStorageData = storage['historyData'];
    expect(sessionStorage.getItem('historyData')).toEqual(mockedStorageData);
  });

  it('should get data from the session storage', () => {
    const mockedHistoryData: HistoryDataItem = service['convertToHistoryData'](
      mockedItem,
      []
    );
    service.addObjectToStorage(mockedItem);
    expect(service.getSessionStorageData()).toEqual([mockedHistoryData]);
  });

  it('should do nothing if the session storage is empty', () => {
    const mockedItem: ConvertResult = Object.create(mockedConverResult);
    const mockedHistoryData: HistoryDataItem = service['convertToHistoryData'](
      mockedItem,
      []
    );
    service.deleteItem(mockedHistoryData);
    expect(service.getSessionStorageData().length).toEqual(0);
  });

  it('should delete item from session storage', () => {
    const mockedItem: ConvertResult = Object.create(mockedConverResult);
    service.addObjectToStorage(mockedItem);
    service.addObjectToStorage(mockedItem);
    const mockedHistoryData: HistoryDataItem[] =
      service.getSessionStorageData();

    service.deleteItem(mockedHistoryData[0]);

    expect(service.getSessionStorageData().length).toEqual(1);
  });
});
