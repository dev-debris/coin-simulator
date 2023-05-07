import dynamic from 'next/dynamic';

const ApexChart = dynamic(() => import('react-apexcharts').then(ReactApexChart => ReactApexChart), {ssr: false});

const CoinDetailChart = (props: ApexChartProp) => {
  return <ApexChart {...props} />;
};

export default CoinDetailChart;
