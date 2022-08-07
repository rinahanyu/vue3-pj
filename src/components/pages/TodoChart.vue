<script setup lang="ts">
import { computed } from '@vue/runtime-core';
import { Chart, ChartData, registerables, ChartOptions } from 'chart.js'
import { ScatterChart } from 'vue-chart-3'
import { useStore } from 'vuex'
import { Todo, chartDataListType } from '../../store/vuex/types'

const store = useStore()
// カラーバリエーション（チャートデータ表示用）
const colorValiation = [
   'red', 'orange', 'yellow', 'aqua', 'blue', 'navy', 'green', 'teal', 'black', 'purple'
]

// データ中央値
const dataAverage = 5
// グリッド線の配色
const gridBlack = 'rgb(201, 203, 207)'
const gridGreen = 'rgb(75, 192, 192)'
// グリッド線の太さ
const gridWidthDefault = 1
const gridWidthBold = 3

// チャート表示用のデータ生成
const setChartData = computed(() => {
  const todos = store.state.todos
  let chartDataList: chartDataListType[] = []
  todos.map((t: Todo, index: number) => {
    let label = t.title
    let data = [{
      x: t.emergency,
      y: t.importance
    }]
    let chartData = {
      label: label,
      data: data,
      backgroundColor: colorValiation[index],
      pointRadius: 6
    }
    chartDataList.push(chartData)
  })
  return chartDataList
})

// チャートデータ設定
Chart.register(...registerables)
const scatterChart: ChartData<"scatter"> = {
  datasets: setChartData.value
};

// チャートオプション設定
const options: ChartOptions<"scatter"> = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Todo Chart'
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'emergency'
      },
      suggestedMin: 1,
      suggestedMax: 9,
      grid: {
        drawBorder: false,
        color: function ( context ) {
          if(context.tick.value === dataAverage) {
            return gridGreen
          } else {
            return gridBlack
          }
        },
        lineWidth: function ( context ) {
          if(context.tick.value === dataAverage) {
            return gridWidthBold
          } else {
            return gridWidthDefault
          }
        }
      }
    },
    y: {
      title: {
        display: true,
        text: 'importance'
      },
      suggestedMin: 1,
      suggestedMax: 9,
      grid: {
        drawBorder: false,
        color: function ( context ) {
          if(context.tick.value === dataAverage) {
            return gridGreen
          } else {
            return gridBlack
          }
        },
        lineWidth: function ( context ) {
          if(context.tick.value === dataAverage) {
            return gridWidthBold
          } else {
            return gridWidthDefault
          }
        }
      }
    },
  }
}
</script>

<template>
  <div class="container mt-16">
    <h1>Chart</h1>
    <div class="chart">
<ScatterChart :chartData="scatterChart"  :options="options" />
    </div>
    <div class="mt-8">
    <v-btn class="home_link_button my-5 mx-5 pa-2">
      <router-link
        to="/"
        style="color: white"
      >
        comback to HOME!!!
      </router-link>
    </v-btn>
  </div>
  </div>
</template>

<style scoped>
.container {
  background-color: white;
  width: 700px;
  height: 450px;
  position: relative;
}
.home_link_button {
  background-color: rgb(27, 160, 129);
  color: white !important;
  border-radius: 10px;
}
</style>