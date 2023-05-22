interface PortfolioDetailItemProp {
  coin: PurchasedCoin;
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

interface TradeCoinProp {
  selectedCoin: Coin;
}

interface TradeOptionsProp {
  selectedCoin: Coin;
}

interface NumberInputProp {
  onChange: (value: number | null) => any;
}
