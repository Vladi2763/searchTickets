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

export type InitialState = {
  tickets: Array<Ticket>;
  filters: Array<string>;
  activeFilters: Array<{ active: boolean; text: string; id: number }>;
};

export type Action = {
  type: string;
  tickets: Array<Ticket>;
  activeFilters: Array<{ active: boolean; text: string; id: number }>;
};

const initialState: InitialState = {
  tickets: [],
  filters: [
    "Все",
    "Без пересадок",
    "1 пересадка",
    "2 пересадки",
    "3 пересадки",
  ],
  activeFilters: [],
};

const ticketsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_TICKETS": {
      return {
        ...state,
        tickets: action.tickets,
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

export default ticketsReducer;
