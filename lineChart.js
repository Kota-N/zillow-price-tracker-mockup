const lineCtx = document.getElementById('line-chart').getContext('2d');

const getRandomRGB = () => {
  r = Math.floor(Math.random() * 200) + 40;
  g = Math.floor(Math.random() * 200) + 40;
  b = Math.floor(Math.random() * 200) + 40;

  return `rgb(${r}, ${g}, ${b})`;
};

const buildDateLabels = () => {
  const labels = [];

  for (let i = 0; i < dateData.length; i++) {
    labels.push(dateData[i]);
  }

  return labels;
};

const buildDatasetData = productName => {
  const datasetData = [];

  for (let i = 0; i < dateData.length; i++) {
    datasetData.push(priceData[productName][i]);
  }

  return datasetData;
};

const buildDatasets = () => {
  const datasets = [];

  for (let i = 0; i < productData.length; i++) {
    dataset = {
      data: buildDatasetData(productData[i]),
      label: productData[i],
      borderColor: getRandomRGB(),
      lineTension: 0,
      fill: false,
    };

    datasets.push(dataset);
  }

  return datasets;
};

const buildChartData = () => {
  labels = buildDateLabels();
  datasets = buildDatasets();

  return {
    labels,
    datasets,
  };
};

// {
//   labels: [],
//   datasets: [
//     {
//       data: [],
//       label: '1',
//       borderColor: "",
//       fill: false
//     },
//   ]
// }

var initChart = () => {
  data = buildChartData();

  const myChart = new Chart(lineCtx, {
    type: 'line',
    data,
    options: {
      title: {
        display: true,
        text: 'House Prices (zillow.com)',
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            return `$${tooltipItem.yLabel
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
          },
        },
      },
    },
  });
};

initChart();
