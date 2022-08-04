export type Ticket = {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
};

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

export type InitialState = {
  tickets: Array<Ticket>;
  currencies: Array<CurrencyArr>;
  selectedCurrency: string;
};

type Action = {
  type: string;
  tickets: Array<Ticket>;
  currencies: Array<CurrencyArr>;
  selectedCurrency: string;
};

const initialState: InitialState = {
  tickets: [],
  currencies: [],
  selectedCurrency: "RUB",
};

const mainReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_TICKETS": {
      return {
        ...state,
        tickets: action.tickets,
      };
    }

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

export default mainReducer;
