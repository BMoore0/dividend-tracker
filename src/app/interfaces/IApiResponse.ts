import { StockResults } from "./IStockResults";

export interface IApiResponse {
    next_url: string,
    results: StockResults[],
    status: string
}