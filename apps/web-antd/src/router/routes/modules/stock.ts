import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: $t('stock.title'),
    },
    name: 'Stocks',
    path: '/stock',
    children: [
      {
        meta: {
          title: $t('stock.antd'),
        },
        name: 'StockDemos',
        path: '/stock/daily',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
    ],
  },
];

export default routes;
