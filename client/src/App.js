import './App.css';
import { Chart as ChartJS } from 'chart.js/auto';

import { Bar } from 'react-chartjs-2';

function App() {
  const staticData = [
    {
      label: 'Store 1',
      data: [100, 150, 200, 250, 300, 350],
      backgroundColor: 'red',
      barThickness: 12,
    },
    {
      label: 'Store 2',
      data: [321, 212, 344, 332, 223, 466],
      backgroundColor: 'green',
      barThickness: 12,
    },
    {
      label: 'Store 3',
      data: [123, 200, 232, 600, 232, 223],
      backgroundColor: 'orange',
      barThickness: 12,
    },
    {
      label: 'Store 4',
      data: [100, 500, 300, 343, 143, 343],
      backgroundColor: 'purple',
      barThickness: 12,
    },
  ];
  return (
    <div className='App'>
      <h1>Welcome to Bar Chart</h1>
      <Bar
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: staticData,
        }}
      ></Bar>
    </div>
  );
}

export default App;
