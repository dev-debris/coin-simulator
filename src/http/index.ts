const UPBIT_API_ENDPOINT = process.env.NEXT_PUBLIC_UPBIT_API_ENDPOINT;

const getOptions = {method: 'GET', headers: {accept: 'application/json'}};

const generateFullUri = (url: string, {paths, queries}: AdditionalUriInfo) => {
  if (paths?.length) {
    url += `/${paths.join('/')}`;
  }

  if (Object.keys(queries).length) {
    url += `?${Object.entries(queries)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}=${v}`)
      .join('&')}`;
  }

  return url;
};

const getRequest =
  <T extends AdditionalUriInfo>(endpoint: string) =>
  async (additionalUriInfo: T) => {
    const uri = generateFullUri(endpoint, additionalUriInfo);
    const res = await fetch(uri, getOptions);
    if (!res.ok) return Promise.reject(res);
    return await res.json();
  };

export const getMinutesCandles = getRequest<MinuteCandleRequest>(`${UPBIT_API_ENDPOINT}/candles/minutes`);
export const getDaysCandles = getRequest<DayCandleRequest>(`${UPBIT_API_ENDPOINT}/candles/days`);
export const getWeeksCandles = getRequest<WeekCandleRequest>(`${UPBIT_API_ENDPOINT}/candles/weeks`);
export const getMonthsCandles = getRequest<MonthCandleRequest>(`${UPBIT_API_ENDPOINT}/candles/months`);
