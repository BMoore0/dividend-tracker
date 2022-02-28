export interface StockInfo {
    ticker: string,
    shareCount: number,
    qtrReturn?: number,
    mnthReturn?: number,
    yrReturn: number,
}