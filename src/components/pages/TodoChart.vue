<script setup lang="ts">
import { Chart, ChartData, registerables, ChartOptions } from 'chart.js'
import { ScatterChart } from 'vue-chart-3'

Chart.register(...registerables)

const scatterChart: ChartData<"scatter"> = {
  // TODO: ①データをvuexから取得するように変更
  datasets: [
    {
      label: '1組',
      data: [{x:90, y:82},{x:39, y:45},{x:63, y:65},{x:83, y:75},{x:83, y:95}],
      backgroundColor: 'RGBA(225,95,150, 1)',
    }, 
    {
      label: '2組',
      data: [{x:-97, y:-92},{x:63, y:70},{x:48, y:52},{x:83, y:79},{x:66, y:74}],
      backgroundColor: 'RGBA(115,255,25, 1)',
    }
  ],  
};

// TODO: ②optionはデータセットができたら対応
// const options: ChartOptions<"scatter"> = {
//   title: {
//     display: true,
//     text: '試験成績'
//   },
//   scales: {
//     xAxes: [{
//       scaleLabel: {
//         display: true,
//         labelString: '英語'
//       },
//       ticks: {
//         suggestedMin: 0,
//         suggestedMax: 100,
//         stepSize: 10,
//         callback: function(value, index, values){
//           return  value +  '点'
//         }
//       }
//     }],
//     yAxes: [{
//       scaleLabel: {
//         display: true,
//         labelString: '数学'
//       },
//       ticks: {
//         suggestedMax: 100,
//         suggestedMin: 0,
//         stepSize: 10,
//         callback: function(value, index, values){
//           return  value +  '点'
//         }
//       }
//     }]
//   }
// }

</script>

<template>
  <div class="container mt-16">
    <h1>Todo Chart</h1>
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
  height: 400px;
  position: relative;
}
.home_link_button {
  background-color: rgb(27, 160, 129);
  color: white !important;
  border-radius: 10px;
}
</style>