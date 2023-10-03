import './PieChartApp.css';
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const PieChartApp = ({data}) => {
  return <PieMUI data={data} />
}

function PieMUI({data}) {
  return (
    <PieChart
      series={[
        {
          data: data,
        },
      ]}
      width={400}
      height={200}
    />
  );
}

export default PieChartApp;