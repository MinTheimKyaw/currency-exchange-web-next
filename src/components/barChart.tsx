"use client";
import {Bar} from 'react-chartjs-2';
import { Card, CardContent, CardTitle } from "@/components/commonUi/card";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const BarChart = ({ data }: any) => {
    var size = 5;
    var randomColor = require('randomcolor');
    const valueData = Object.entries(data.rates).slice(0, size).map(([currency,rate]) => {
        return {
              label: currency,
              data: [parseFloat(String(rate).replace(/,/g, ''))],
              backgroundColor: randomColor(),
            }
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
        labels: ['First 5 Currency Rate'],
        datasets: valueData
    }
    return (
        <Card className="w-1/2 h-1/4">
            <Bar 
                options={options}
                data={barchartdata} 
            />
        </Card>
    )
}

export default BarChart;