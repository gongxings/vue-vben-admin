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
  export interface StockTableColumnsParams {
    [key: string]: any;
    table_name: string;
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

/**
 * 获取股票数据
 */
async function getStockTableColumnsApi(params: DemoTableApi.StockTableColumnsParams) {
  return requestClient.get('/stock-api/instock/table/columns', { params });
}

export { getExampleTableApi,getStockDataApi,getStockTableColumnsApi };
