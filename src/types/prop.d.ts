interface ChildrenProp {
  children: import('react').ReactNode;
}

interface PortfolioDetailItemProp {
  coin: PurchasedCoin;
}

interface CoinDetailProp {
  coin: Coin;
}

interface CoinDetailInfoProp {
  coin: Coin;
}

type ApexChartProp = import('react-apexcharts').Props;

interface CoinListItemProp {
  coin: Coin;
}

interface CandleState {
  type: CandleType;
  unit: MinuteCandleRequest['paths'][0];
}
interface ChartOptionData {
  group: CandleType;
  options: Array<{
    value: number;
    label: string;
  }>;
}

interface CoinDetailChartProp {
  chartData: ApexChartProp;
  type: string;
  unit: number;
  onChange: (e: import('react').ChangeEvent<HTMLSelectElement>) => void;
}
