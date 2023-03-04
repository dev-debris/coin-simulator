interface CandleResponse {
  market: string;
  candle_date_time_utc: string;
  candle_date_time_kst: string;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  timestamp: number;
  candle_acc_trade_price: number;
  candle_acc_trade_volume: number;
}

interface MinuteCandleResponse extends CandleResponse {
  unit: number;
}

interface DayCandleResponse extends CandleResponse {
  prev_closing_price: number;
  change_price: number;
  change_rate: number;
  converted_trade_price: number;
}

interface WeekCandleResponse extends CandleResponse {
  first_day_of_period: string;
}

interface MonthCandleResponse extends WeekCandleResponse {}
