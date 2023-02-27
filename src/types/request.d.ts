type OneTo200 = IntRange<1, 201>;
type MinuteUnit = 1 | 3 | 5 | 15 | 10 | 30 | 60 | 240;
type CandleType = 'minutes' | 'days' | 'weeks' | 'months';

interface CandleRequest {
  [x: string]: unknown;
  market: string;
  to?: string;
  count?: OneTo200;
}

interface MinuteCandleRequest extends CandleRequest {
  unit: MinuteUnit;
}

interface DayCandleRequest extends CandleRequest {
  convertingPriceUnit?: string;
}

interface WeekCandleRequest extends CandleRequest {}
interface MonthCandleRequest extends CandleRequest {}
