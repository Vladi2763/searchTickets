type Currency = {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
};

export type CurrencyArr = [string, Currency];

export type InitialStateCurrencies = {
  currencies: Array<CurrencyArr>;
  selectedCurrency: string;
};

type Action = {
  type: string;
  currencies: Array<CurrencyArr>;
  selectedCurrency: string;
};

const initialState: InitialStateCurrencies = {
  currencies: [],
  selectedCurrency: "RUB",
};

const currencyReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_CURRENCIES": {
      return {
        ...state,
        currencies: action.currencies,
      };
    }

    case "SET_ACTIVE_CURRENCY": {
      return {
        ...state,
        selectedCurrency: action.selectedCurrency,
      };
    }
    default:
      return state;
  }
};

export default currencyReducer;
