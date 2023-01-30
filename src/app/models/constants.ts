import { ConvertResult } from './interfaces';

export const REGEX_ONLY_NUMBERS =
  /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/;

export const CONVERT_RESULT: ConvertResult = {
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
  higherVale: false,
};
