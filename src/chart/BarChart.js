import { Chart as ChartJS, BarElement } from 'chart.js/auto';
import React, { useState, useEffect } from 'react';

import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement);

const BarChart = () => {
  const [chart, setChart] = useState({});
  var baseUrl = 'https://api.coinranking.com/v2/coins/?limit=10';
  // var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  var apiKey = 'coinranking4ab94fbf0d5ba26d6178ee2f48db2a4fac08db2d9dfdc496';

  useEffect(() => {
    const fetchStats = async () => {
      await fetch(`${baseUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': `${apiKey}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              console.log(json.data);
              setChart(json.data);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchStats();
  }, [baseUrl, apiKey]);

  console.log('chart', chart);

  const staticData = [
    {
      label: 'Store 1',
      data: chart?.coins?.map((x) => x.price),
      backgroundColor: 'red',
      barThickness: 12,
    },
  ];
  return (
    <div className='App'>
      <h1>Welcome to Bar Chart</h1>
      <Bar
        data={{
          labels: chart?.coins?.map((x) => x.name),
          datasets: staticData,
        }}
      ></Bar>
    </div>
  );
};
export default BarChart;
