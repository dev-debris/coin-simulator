import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import React from 'react';
import {Line} from 'react-chartjs-2';
import {useRecoilState} from 'recoil';
import {candleState} from '@/atoms';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StockChart = ({datas}: StockChartProp) => {
  const [, setCandleType] = useRecoilState(candleState);

  const onClickDay = () => {
    setCandleType('day');
  };
  const onClickMinute = () => {
    setCandleType('minute');
  };
  const onClickWeek = () => {
    setCandleType('week');
  };
  const onClickMonth = () => {
    setCandleType('month');
  };

  if (!datas) return <div>Loading...</div>;

  const labels = datas.map(({timestamp}) =>
    new Date(timestamp).toLocaleTimeString('en', {
      day: 'numeric',
      month: 'short',
    })
  );

  const data = {
    labels,
    datasets: [
      {
        label: '고가',
        data: labels.map((_, i) => datas[i]?.high_price),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '저가',
        data: labels.map((_, i) => datas[i]?.low_price),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <>
      <button onClick={onClickMinute}>minute으로</button>
      <button onClick={onClickDay}>day로</button>
      <button onClick={onClickWeek}>week</button>
      <button onClick={onClickMonth}>month</button>
      <Line data={data} />
    </>
  );
};

export default StockChart;
