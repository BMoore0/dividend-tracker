import { StockResult } from "./IStockResult";

export interface IApiResponse {
    next_url: string,
    results: StockResult[],
    status: string
}