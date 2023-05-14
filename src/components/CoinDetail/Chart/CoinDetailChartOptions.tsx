const CoinDetailChartOptions = () => {
  return (
    <>
      {optionData.map(({group, options}) =>
        options.map(({value, label}) => (
          <option value={`${group} ${value}`} key={label}>
            {label}
          </option>
        ))
      )}
    </>
  );
};

const optionData: ChartOptionData[] = [
  {
    group: 'minutes',
    options: [
      {value: 1, label: '1m'},
      {value: 3, label: '3m'},
      {value: 5, label: '5m'},
      {value: 10, label: '10m'},
      {value: 15, label: '15m'},
      {value: 30, label: '30m'},
      {value: 60, label: '1H'},
      {value: 240, label: '4H'},
    ],
  },
  {group: 'days', options: [{value: 1, label: '1D'}]},
  {group: 'weeks', options: [{value: 1, label: '1W'}]},
  {group: 'months', options: [{value: 1, label: '1M'}]},
];

export default CoinDetailChartOptions;
