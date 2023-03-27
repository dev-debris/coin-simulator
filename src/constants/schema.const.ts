import {z} from 'zod';

const CandleSchema = z.object({
  market: z.string(),
  candle_date_time_utc: z.string(),
  candle_date_time_kst: z.string(),
  opening_price: z.number(),
  high_price: z.number(),
  low_price: z.number(),
  trade_price: z.number(),
  timestamp: z.number(),
  candle_acc_trade_price: z.number(),
  candle_acc_trade_volume: z.number(),
});

export const MinuteCandleResponseSchema = CandleSchema.merge(
  z.object({
    unit: z.number(),
  })
).array();

export const DayCandleResponseSchema = CandleSchema.merge(
  z.object({
    prev_closing_price: z.number(),
    change_price: z.number(),
    change_rate: z.number(),
    converted_trade_price: z.number(),
  })
).array();

export const WeekCandleResponseSchema = CandleSchema.merge(
  z.object({
    first_day_of_period: z.string(),
  })
).array();

export const MonthCandleResponseSchema = CandleSchema.merge(
  z.object({
    first_day_of_period: z.string(),
  })
).array();

export const TickerResponseSchema = z
  .object({
    market: z.string(),
    trade_date: z.string(),
    trade_time: z.string(),
    trade_date_kst: z.string(),
    trade_time_kst: z.string(),
    trade_timestamp: z.number(),
    opening_price: z.number(),
    high_price: z.number(),
    low_price: z.number(),
    trade_price: z.number(),
    prev_closing_price: z.number(),
    change: z.string(),
    change_price: z.number(),
    change_rate: z.number(),
    signed_change_price: z.number(),
    signed_change_rate: z.number(),
    trade_volume: z.number(),
    acc_trade_price: z.number(),
    acc_trade_price_24h: z.number(),
    acc_trade_volume: z.number(),
    acc_trade_volume_24h: z.number(),
    highest_52_week_price: z.number(),
    highest_52_week_date: z.string(),
    lowest_52_week_price: z.number(),
    lowest_52_week_date: z.string(),
    timestamp: z.number(),
  })
  .array();

export const MarketResponseSchema = z
  .object({
    market: z.string(),
    korean_name: z.string(),
    english_name: z.string(),
    market_warning: z.string().optional(),
  })
  .array();
