"use client";
import { Card } from "@/components/commonUi/card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const DonutChart = ({ data }: any) => {
    var size = 5;
    var randomColor = require('randomcolor');
    const labelData = Object.entries(data.rates).slice(0, size).map(([currency]) => {
        return currency
    }); 
    const valueData = Object.entries(data.rates).slice(0, size).map(([currency,rate]) => {
        return parseFloat(String(rate).replace(/,/g, ''))
    }); 
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Only Show First 5 Currency Rate',
          },
        },
      };
    const barchartdata = {
        labels: labelData,
        datasets: [
            {
              label: 'Currency Rate',
              data: valueData,
              backgroundColor: [
                randomColor(),
                randomColor(),
                randomColor(),
                randomColor(),
                randomColor(),
                randomColor(),
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            }
          ],
    }
    return (
        <Card className="w-1/2 h-1/4">
            <Doughnut 
                options={options}
                data={barchartdata} 
            />
        </Card>
    )
}

export default DonutChart;