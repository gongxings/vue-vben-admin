import type {RouteRecordRaw} from 'vue-router';

// import {$t} from '#/locales';

const routes: RouteRecordRaw[] = [
  // 综合选股
  {
    meta: {
      title: '综合选股',
      icon: 'ic:baseline-desktop-windows', // 综合选股
      query: {
        tableName: 'cn_stock_selection',
      },
    },
    name: 'StockSelection',
    path: '/stock/selection',
    component: () => import('#/views/stock/tableView/index.vue'),
  },

  // 股票基本数据
  {
    meta: {
      title: '股票基本数据',
      icon: 'ic:baseline-book', // 股票基本数据
    },
    name: 'StockBasic',
    path: '/stock/basic',
    redirect: '/stock/spot',
    component: { render: () => h('router-view') },
    children: [
      {
        meta: {
          title: '每日股票数据',
          icon: 'ic:baseline-today', // 每日股票数据
          query: {
            tableName: 'cn_stock_spot',
          },
        },
        name: 'StockSpot',
        path: '/stock/spot',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '早盘抢筹数据',
          icon: 'ic:baseline-access-time', // 早盘抢筹
          query: {
            tableName: 'cn_stock_chip_race_open',
          },
        },
        name: 'StockChipRaceOpen',
        path: '/stock/chip-race-open',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '尾盘抢筹数据',
          icon: 'ic:baseline-access-time', // 尾盘抢筹
          query: {
            tableName: 'cn_stock_chip_race_end',
          },
        },
        name: 'StockChipRaceEnd',
        path: '/stock/chip-race-end',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '涨停原因揭密',
          icon: 'ic:baseline-gavel', // 涨停原因
          query: {
            tableName: 'cn_stock_limitup_reason',
          },
        },
        name: 'StockLimitUpReason',
        path: '/stock/limitup-reason',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '股票资金流向',
          icon: 'ic:baseline-trending-up', // 资金流向
          query: {
            tableName: 'cn_stock_fund_flow',
          },
        },
        name: 'StockFundFlow',
        path: '/stock/fund-flow',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '股票分红配送',
          icon: 'ic:baseline-receipt', // 分红配送
          query: {
            tableName: 'cn_stock_bonus',
          },
        },
        name: 'StockBonus',
        path: '/stock/bonus',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '股票龙虎榜',
          icon: 'ic:baseline-emoji-events', // 龙虎榜
          query: {
            tableName: 'cn_stock_top',
          },
        },
        name: 'StockTop',
        path: '/stock/top',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '股票大宗交易',
          icon: 'ic:baseline-business-center', // 大宗交易
          query: {
            tableName: 'cn_stock_blocktrade',
          },
        },
        name: 'StockBlockTrade',
        path: '/stock/blocktrade',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '行业资金流向',
          icon: 'ic:baseline-balance', // 行业资金
          query: {
            tableName: 'cn_stock_fund_flow_industry',
          },
        },
        name: 'StockFundFlowIndustry',
        path: '/stock/fund-flow-industry',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '概念资金流向',
          icon: 'ic:baseline-lightbulb', // 概念资金
          query: {
            tableName: 'cn_stock_fund_flow_concept',
          },
        },
        name: 'StockFundFlowConcept',
        path: '/stock/fund-flow-concept',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '每日ETF数据',
          icon: 'ic:baseline-currency-exchange', // ETF数据
          query: {
            tableName: 'cn_etf_spot',
          },
        },
        name: 'EtfSpot',
        path: '/stock/etf-spot',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
    ],
  },

  // 股票指标数据
  {
    meta: {
      title: '股票指标数据',
      icon: 'ic:baseline-subtitles', // 股票指标数据
    },
    name: 'StockIndicators',
    path: '/stock/indicators',
    redirect: '/stock/indicators-all',
    component: { render: () => h('router-view') },
    children: [
      {
        meta: {
          title: '股票指标数据',
          icon: 'ic:baseline-query-stats', // 指标数据
          query: {
            tableName: 'cn_stock_indicators',
          },
        },
        name: 'StockIndicatorsAll',
        path: '/stock/indicators-all',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '股票指标买入',
          icon: 'ic:baseline-call-made', // 指标买入
          query: {
            tableName: 'cn_stock_indicators_buy',
          },
        },
        name: 'StockIndicatorsBuy',
        path: '/stock/indicators-buy',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '股票指标卖出',
          icon: 'ic:baseline-call-received', // 指标卖出
          query: {
            tableName: 'cn_stock_indicators_sell',
          },
        },
        name: 'StockIndicatorsSell',
        path: '/stock/indicators-sell',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
    ],
  },

  // 股票K线形态
  {
    meta: {
      title: '股票K线形态',
      icon: 'ic:baseline-price-change', // 股票K线形态
      query: {
        tableName: 'cn_stock_pattern',
      },
    },
    name: 'StockPattern',
    path: '/stock/pattern',
    component: () => import('#/views/stock/tableView/index.vue'),
  },

  // 股票策略数据
  {
    meta: {
      title: '股票策略数据',
      icon: 'ic:baseline-checklist', // 股票策略数据
    },
    name: 'StockStrategy',
    path: '/stock/strategy',
    redirect: '/stock/strategy-enter',
    component: { render: () => h('router-view') },
    children: [
      {
        meta: {
          title: '基本面选股',
          icon: 'ic:baseline-verified', // 基本面选股
          query: {
            tableName: 'cn_stock_spot_buy',
          },
        },
        name: 'StockSpotBuy',
        path: '/stock/spot-buy',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '放量上涨',
          icon: 'ic:baseline-bar-chart', // 放量上涨
          query: {
            tableName: 'cn_stock_strategy_enter',
          },
        },
        name: 'StockStrategyEnter',
        path: '/stock/strategy-enter',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '均线多头',
          icon: 'ic:baseline-trending-up', // 均线多头
          query: {
            tableName: 'cn_stock_strategy_keep_increasing',
          },
        },
        name: 'StockStrategyKeepIncreasing',
        path: '/stock/strategy-keep-increasing',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '停机坪',
          icon: 'ic:baseline-airplanemode-inactive', // 停机坪
          query: {
            tableName: 'cn_stock_strategy_parking_apron',
          },
        },
        name: 'StockStrategyParkingApron',
        path: '/stock/strategy-parking-apron',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '回踩年线',
          icon: 'ic:baseline-vertical-align-bottom', // 回踩年线
          query: {
            tableName: 'cn_stock_strategy_backtrace_ma250',
          },
        },
        name: 'StockStrategyBacktraceMa250',
        path: '/stock/strategy-backtrace-ma250',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '突破平台',
          icon: 'ic:baseline-change-history', // 突破平台
          query: {
            tableName: 'cn_stock_strategy_breakthrough_platform',
          },
        },
        name: 'StockStrategyBreakthroughPlatform',
        path: '/stock/strategy-breakthrough-platform',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '无大幅回撤',
          icon: 'ic:baseline-stacked-line-chart', // 无大幅回撤
          query: {
            tableName: 'cn_stock_strategy_low_backtrace_increase',
          },
        },
        name: 'StockStrategyLowBacktraceIncrease',
        path: '/stock/strategy-low-backtrace-increase',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '海龟交易法则',
          icon: 'ic:baseline-eco', // 海龟交易法则
          query: {
            tableName: 'cn_stock_strategy_turtle_trade',
          },
        },
        name: 'StockStrategyTurtleTrade',
        path: '/stock/strategy-turtle-trade',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '高而窄的旗形',
          icon: 'ic:baseline-flag', // 高而窄的旗形
          query: {
            tableName: 'cn_stock_strategy_high_tight_flag',
          },
        },
        name: 'StockStrategyHighTightFlag',
        path: '/stock/strategy-high-tight-flag',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '放量跌停',
          icon: 'ic:baseline-trending-down', // 放量跌停
          query: {
            tableName: 'cn_stock_strategy_climax_limitdown',
          },
        },
        name: 'StockStrategyClimaxLimitDown',
        path: '/stock/strategy-climax-limitdown',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
      {
        meta: {
          title: '低ATR成长',
          icon: 'ic:baseline-insights', // 低ATR成长
          query: {
            tableName: 'cn_stock_strategy_low_atr',
          },
        },
        name: 'StockStrategyLowAtr',
        path: '/stock/strategy-low-atr',
        component: () => import('#/views/stock/tableView/index.vue'),
      },
    ],
  },
];

export default routes;
