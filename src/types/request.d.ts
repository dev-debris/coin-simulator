interface ApiRequest {
  paths?: (string | number)[];
  queries?: Record<string, string | number | boolean>;
  data?: Record<string, any>;
}

interface CandleRequest extends ApiRequest {
  queries: {
    market: string;
    to?: string;
    count?: number;
  };
}

type MinuteCandleRequest = CandleRequest & {
  paths: [unit: 1 | 3 | 5 | 15 | 10 | 30 | 60 | 240];
};

type DayCandleRequest = CandleRequest & {
  queries: {
    convertingPriceUnit?: string;
  };
};

type WeekCandleRequest = CandleRequest;

type MonthCandleRequest = CandleRequest;

interface TickerRequest extends ApiRequest {
  queries: {
    markets: string;
  };
}

interface MarketRequest extends ApiRequest {
  queries: {
    isDetails: boolean;
  };
}

type CandleType = 'minute' | 'day' | 'week' | 'month';
