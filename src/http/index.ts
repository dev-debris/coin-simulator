const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

const options = {method: 'GET', headers: {accept: 'application/json'}};

const generateQueryString = (params: CandleRequest) => {
  const {unit} = params;
  return (
    (unit ? `/${unit}` : '') +
    `?${Object.entries(params)
      .filter(([k, v]) => v && k !== 'unit')
      .map(([k, v]) => `&${k}=${v}`)
      .join('&')}`
  );
};

const getCandles =
  <T extends CandleRequest>(type: CandleType) =>
  async (params: T) => {
    const queryString = generateQueryString(params);
    return await fetch(`${API_ENDPOINT}/${type}${queryString}`, options).then(res => res.json());
  };

export const getMinuteCandles = getCandles<MinuteCandleRequest>('minutes');
export const getDayCandles = getCandles<DayCandleRequest>('days');
export const getWeekCandles = getCandles<WeekCandleRequest>('weeks');
export const getMonthCandles = getCandles<MonthCandleRequest>('months');
