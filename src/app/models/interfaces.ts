export interface SymbolResponse {
  description: string;
  code: string;
}

export interface ConvertResult {
  rate: number;
  amount: number;
  originCurrency: string;
  finalCurrency: string;
  result: number;
  date: string;
}

export interface formData {
  amount: string;
  finalCurrency: string;
  originCurrency: string;
}

export interface ApiResponse {
  date: string;
  historical: boolean;
  info: ApiInfo;
  motd: ApiMessage;
  query: ApiQuery;
  result: number;
  success: boolean;
}

interface ApiQuery {
  amount: number;
  from: string;
  to: string;
}

interface ApiMessage {
  msg: string;
  url: string;
}

interface ApiInfo {
  rate: number;
}

export interface ApiResponseSymbols {
  symbols: Object;
}
