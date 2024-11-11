"use client";

import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement, Tooltip, Legend, plugins} from 'chart.js'
Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts} : DoughnutChartProps) => {
    const data = {
        labels: ['SBI','PNB', 'HDFC'],
        datasets: [{
          label: 'Banks',
          data: [1200, 1550, 1000],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 99, 132)',
          ],
          hoverOffset: 4
        }]
    };

    const options = {
        cutout:'60%',
        plugins : {
            legend : { display : false }
        }
    };
  return (
    <Doughnut data={data} options={options}/> 
  )
}

export default DoughnutChart