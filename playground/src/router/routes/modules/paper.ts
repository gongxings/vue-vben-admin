import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:layout-dashboard',
      order: -1,
      title: $t('page.dashboard.title'),
    },
    name: 'Paper',
    path: '/paper',
    component: () => import('#/layouts/paper-layout.vue'),
    children: [
      {
        name: 'Create',
        path: '/paper/create',
        component: () => import('#/views/paper/paper-create.vue'),
        meta: {
          affixTab: true,
          icon: 'lucide:area-chart',
          title: $t('page.dashboard.analytics'),
        },
      },
    ],
  },
]

export default routes;
