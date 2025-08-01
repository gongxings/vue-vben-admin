<script lang="ts" setup>
import type {VbenFormProps} from '#/adapter/form';
import type {VxeTableGridOptions} from '#/adapter/vxe-table';
import {useVbenVxeGrid} from '#/adapter/vxe-table';
import {Page} from '@vben/common-ui';
import {onMounted, ref,computed} from 'vue';
import {getStockDataApi, getStockTableColumnsApi} from '#/api';
import dayjs from 'dayjs'
import { useRoute } from 'vue-router'


interface RowType {
  [key: string]: any;
}

// 响应式 columns
const columns = ref([])
const route = useRoute()
const tableName = computed(() => route.query.tableName)

const formOptions: VbenFormProps = {
  // 默认展开
  collapsed: false,
  schema: [
    {
      component: 'Input',
      fieldName: 'stockCode',
      componentProps: {
        placeholder: '请输入股票代码',
      },
      label: '股票代码',
    },
    {
      component: 'Input',
      fieldName: 'stockName',
      componentProps: {
        placeholder: '请输入股票名称',
      },
      label: '股票名称',
    },
    {
      component: 'DatePicker',
      fieldName: 'date',
      label: '日期',
      defaultValue: dayjs().format('YYYY-MM-DD'),
      componentProps: {
        pickerType: 'date',
        format: 'YYYY-MM-DD',
        valueFormat: 'YYYY-MM-DD',
      }
    },
  ],
  // 控制表单是否显示折叠按钮
  showCollapseButton: true,
  // 是否在字段值改变时提交表单
  submitOnChange: true,
  // 按下回车时是否提交表单
  submitOnEnter: false,
};

// 获取列配置
async function fetchColumns() {
  try {
    const res = await getStockTableColumnsApi({table_name: tableName.value})
    columns.value = await res.items.column_names.map(col => {
      const width = col.width === 0 || col.width == null ? 'auto' : col.width
      return {
        field: col.value,
        title: col.caption,
        width: width,
        headerStyle: col.headerStyle,
        style: col.style,
        // 可选：支持排序、筛选
        sortable: true,
        filters: null
      }
    })  // ✅ 更新响应式数据
    // console.log(columns.value, "获取的列")
  } catch (error) {
    console.error('获取列配置失败', error)
  }
}

const gridOptions: VxeTableGridOptions<RowType> = {
  checkboxConfig: {
    highlight: true,
    labelField: 'name',
  },
  columns: [],
  exportConfig: {},
  height: 'auto',
  keepSource: true,
  pagerConfig: {},
  proxyConfig: {
    ajax: {
      query: async ({page}, formValues) => {
        // message.success(`Query params: ${JSON.stringify(formValues)}`);
        return await getStockDataApi({
          name: tableName.value,
          ...formValues,
        });
      },
    },
  },
  toolbarConfig: {
    custom: true,
    export: true,
    refresh: true,
    resizable: true,
    search: true,
    zoom: true,
  },
};

const [Grid, extendedApi] = useVbenVxeGrid({
  formOptions,
  gridOptions,
});

// 组件挂载后获取列
onMounted(async () => {
  await fetchColumns();
  await extendedApi.grid.loadColumn(columns.value)
})

</script>

<template>
  <Page auto-content-height>
    <Grid/>
  </Page>
</template>
