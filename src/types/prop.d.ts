interface ChildrenProp {
  children: import('react').ReactNode;
}

interface PortfolioProp {
  netAssets: number;
  remainingCash: number;
  coinList: Array<{
    name: string;
    subName: string;
    averagePrice: number;
    currentPrice: number;
    quantity: number;
  }>;
}

interface StockDetailProp {
  ticker: Ticker;
}

interface StockChartProp {
  datas: Candle[];
}

type ApexChartProp = import('react-apexcharts').Props;

interface StockListItemProp {
  ticker: Market;
}

interface StockDetailProp {
  ticker: Ticker;
}

interface StockChartProp {
  datas: Candle[];
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
