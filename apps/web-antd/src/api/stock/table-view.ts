import { requestClient } from '#/api/request';

export namespace DemoTableApi {
  export interface PageFetchParams {
    [key: string]: any;
    page: number;
    pageSize: number;
  }
  export interface StockDataParams {
    [key: string]: any;
    name: number;
    date: Date;
  }
}

/**
 * 获取示例表格数据
 */
async function getExampleTableApi(params: DemoTableApi.PageFetchParams) {
  return requestClient.get('/api/table/list', { params });
}

/**
 * 获取股票数据
 */
async function getStockDataApi(params: DemoTableApi.StockDataParams) {
  return requestClient.get('/stock-api/instock/api_data', { params });
}

export { getExampleTableApi,getStockDataApi };
