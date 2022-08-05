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
  filters: Array<string>;
  activeFilters: Array<{ active: boolean; text: string; id: number }>;
  selectedCurrency: string;
};

type Action = {
  type: string;
  tickets: Array<Ticket>;
  currencies: Array<CurrencyArr>;
  selectedCurrency: string;
  activeFilters: Array<{ active: boolean; text: string; id: number }>;
};

const initialState: InitialState = {
  tickets: [],
  currencies: [],
  filters: [
    "Все",
    "Без пересадок",
    "1 пересадка",
    "2 пересадки",
    "3 пересадки",
  ],
  activeFilters: [],
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

    case "SET_ACTIVE_FILTERS": {
      return {
        ...state,
        activeFilters: [...action.activeFilters],
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
