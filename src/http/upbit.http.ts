import {z} from 'zod';
import {
  PUBLIC_API_ENDPOINT,
  MinuteCandleResponseSchema,
  DayCandleResponseSchema,
  WeekCandleResponseSchema,
  MonthCandleResponseSchema,
  TickerResponseSchema,
  MarketResponseSchema,
} from '@/constants';
import {getRequest} from './util';

const UPBIT_API_ENDPOINT = PUBLIC_API_ENDPOINT.upbit;

export const getMinutesCandles = getRequest<MinuteCandleRequest, z.infer<typeof MinuteCandleResponseSchema>>(
  `${UPBIT_API_ENDPOINT}/candles/minutes`,
  MinuteCandleResponseSchema
);

export const getDaysCandles = getRequest<DayCandleRequest, z.infer<typeof DayCandleResponseSchema>>(
  `${UPBIT_API_ENDPOINT}/candles/days`,
  DayCandleResponseSchema
);

export const getWeeksCandles = getRequest<WeekCandleRequest, z.infer<typeof WeekCandleResponseSchema>>(
  `${UPBIT_API_ENDPOINT}/candles/weeks`,
  WeekCandleResponseSchema
);

export const getMonthsCandles = getRequest<MonthCandleRequest, z.infer<typeof MonthCandleResponseSchema>>(
  `${UPBIT_API_ENDPOINT}/candles/months`,
  MonthCandleResponseSchema
);

export const getTicker = getRequest<TickerRequest, z.infer<typeof TickerResponseSchema>>(
  `${UPBIT_API_ENDPOINT}/ticker`,
  TickerResponseSchema
);

export const getMarkets = getRequest<MarketRequest, z.infer<typeof MarketResponseSchema>>(
  `${UPBIT_API_ENDPOINT}/market/all`,
  MarketResponseSchema
);
