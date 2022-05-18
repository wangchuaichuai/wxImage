import styled from '@emotion/styled'
import * as echarts from 'echarts'
import React, { useEffect } from 'react'

type EChartsOption = echarts.EChartsOption

const EchartsComp = () => {
  useEffect(() => {
    let chartDom = document.getElementById('echart')!
    let myChart = echarts.init(chartDom, 'dark')
    let option: EChartsOption
    setTimeout(function () {
      option = {
        legend: {},
        tooltip: {
          trigger: 'axis',
          showContent: false,
        },
        dataset: {
          source: [
            ['时间', '一月', '二月', '三月', '四月', '五月', '六月'],
            ['小姐姐', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
            ['动漫卡通', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
            ['生灵万物', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
            ['小清新', 25.2, 37.1, 41.2, 18, 33.9, 49.1],
            ['风景', 31.2, 27.1, 41.2, 18, 33.9, 29.1],
            ['城市瞬变', 24.2, 37.1, 23.2, 68, 19.9, 29.1],
            ['精选', 15.2, 37.1, 11.2, 13, 23.9, 3.1],
            ['主打颜色', 55.2, 77.1, 21.2, 58, 23.9, 14.1],
            ['激情四射', 65.2, 17.1, 1.2, 23, 93.9, 66.1],
            ['游戏', 75.2, 37.1, 41.2, 18, 32.9, 39.1],
          ],
        },
        backgroundColor: '#2d355b',
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '60%', bottom: 10, height: 150 },
        series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
          },
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            emphasis: {
              focus: 'self',
            },
            top: 30,
            label: {
              formatter: '{b}: {@一月} ({d}%)',
            },
            encode: {
              itemName: '时间',
              value: '一月',
              tooltip: '一月',
            },
          },
        ],
      }

      myChart.on('updateAxisPointer', function (event: any) {
        const xAxisInfo = event.axesInfo[0]
        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1
          myChart.setOption<echarts.EChartsOption>({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)',
              },
              encode: {
                value: dimension,
                tooltip: dimension,
              }
            }
          });
        }
      });

      myChart.setOption<echarts.EChartsOption>(option)
    });
    option && myChart.setOption(option)
  }, [])
  return <Div id="echart"></Div>
}

export default React.memo(EchartsComp)

const Div = styled.div`
  width: 100%;
  height: 26.75rem;
  /* margin: 0 auto; */
`
