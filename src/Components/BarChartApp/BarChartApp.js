import './BarChartApp.css';
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


const BarChartApp = ({data, series}) => {
  return  <BarChartMUI data={data} series={series} />
}


function BarChartMUI({data, series}) {
  console.log(data, series);
  return (
    <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: data,
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: series,
        },
      ]}
      width={500}
      height={300}
    />
  );
}

export default BarChartApp;