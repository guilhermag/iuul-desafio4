export interface ApiResponseSymbols {
  symbols: Object;
}

export interface SymbolResponse {
  description: string;
  code: string;
}

export interface ConvertResult {
  rate: number;
  amount: number;
  from: string;
  to: string;
  result: number;
  date: string;
}
