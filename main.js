
const px = (n) => n / 2420 * window.pageWidth;


var myChart = echarts.init(document.getElementById('chart'));

myChart.setOption({
  textStyle: {
    fontSize: px(12),
    color: '#79839E'
  },
  title: {show: false},
  legend: {show: false},
  xAxis: {
    data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
    axisTick: {show: false},
    axisLine: {
      lineStyle: {color: '#083B70'}
    },
    axisLabel: {
      fontSize: px(12),
      formatter(val) {
        if (val.length > 2) {
          const array = val.split('');
          array.splice(2, 0, '\n');
          return array.join('');
        } else {
          return val;
        }
      }
    },
  },
  grid: {
    x: px(40),
    y: px(40),
    x2: px(40),
    y2: px(40),
  },
  yAxis: {
    splitLine: {show: false},
    axisLine: {
      show: true,
      lineStyle: {color: '#083B70'}
    },
    axisLabel: {
      fontSize: px(12)
    }
  },
  series: [{
    type: 'bar',
    data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
  }]
});