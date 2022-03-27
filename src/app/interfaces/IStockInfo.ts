export interface StockInfo {
    ticker: string,
    shareCount: number,
    qtrReturn?: number,
    mnthReturn?: number,
    yrReturn: number,
    frequency: number,
    cash_amount: number
}