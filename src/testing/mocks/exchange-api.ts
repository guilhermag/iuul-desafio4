import {
  SymbolResponse,
  ApiResponse,
  ConvertResult,
} from 'src/app/models/interfaces';

export const mockedSymbolResult: SymbolResponse[] = [
  {
    description: 'United Arab Emirates Dirham',
    code: 'AED',
  },
  {
    description: 'Afghan Afghani',
    code: 'AFN',
  },
];

export const mockedSymbolApiResponse = {
  motd: {
    msg: 'If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.',
    url: 'https://exchangerate.host/#/donate',
  },
  success: true,
  symbols: {
    AED: {
      description: 'United Arab Emirates Dirham',
      code: 'AED',
    },
    AFN: {
      description: 'Afghan Afghani',
      code: 'AFN',
    },
  },
};

export const mockedConvertApiResponse: ApiResponse = {
  motd: {
    msg: 'If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.',
    url: 'https://exchangerate.host/#/donate',
  },
  success: true,
  query: {
    from: 'BRL',
    to: 'USD',
    amount: 100,
  },
  info: {
    rate: 0.197545,
  },
  historical: false,
  date: '2023-01-27',
  result: 19.75448,
};

export const mockedConvertHigherApiResponse: ApiResponse = {
  motd: {
    msg: 'If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.',
    url: 'https://exchangerate.host/#/donate',
  },
  success: true,
  query: {
    from: 'BRL',
    to: 'USD',
    amount: 110000,
  },
  info: {
    rate: 0.197545,
  },
  historical: false,
  date: '2023-01-27',
  result: 19.75448,
};

export const mockedConverResult: ConvertResult = {
  rate: 0.197545,
  amount: 100,
  date: new Date().toLocaleDateString('pt-BR'),
  time: new Date().toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  }),
  finalCurrency: 'USD',
  originCurrency: 'BRL',
  result: 19.75448,
  higherValue: false,
};
