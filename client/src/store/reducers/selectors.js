export const getLastSharePriceSelector = (state, ticker) => {
  if (state.length > 1) {
    return state[state.length - 1].find((share) => share.ticker === ticker)
      .price;
  } else return null;
};

export const getPenultimateSharePriceSelector = (state, ticker) => {
  if (state.length > 1) {
    return state[state.length - 2].find((share) => share.ticker === ticker)
      .price;
  } else return null;
};

export const getСhangeSharePriceSelector = (state, ticker) => {
  if (
    (getLastSharePriceSelector(state, ticker),
    getPenultimateSharePriceSelector(state, ticker))
  ) {
    const changeValue =
      getLastSharePriceSelector(state, ticker) -
      getPenultimateSharePriceSelector(state, ticker);
    if (!changeValue) {
      return "loading data...";
    }
    return changeValue.toFixed(2);
  }
};

export const getСhangeOfPercentSelector = (state, ticker, price) => {
  const changeValue =
    getСhangeSharePriceSelector(state, ticker) /
    (getPenultimateSharePriceSelector(state, ticker) / 100);
  if (!changeValue) {
    return "loading data...";
  }
  return `${changeValue.toFixed(2)}%`;
};
