import { combineReducers } from "redux";
import currencyReducer from "./currencyReducer";
import ticketsReducer from "./ticketsReducer";

import { InitialState } from "./ticketsReducer";
import { InitialStateCurrencies } from "./currencyReducer";

export type MainReducer = {
  tickets: InitialState;
  currencies: InitialStateCurrencies;
};

const mainReducer = combineReducers({
  tickets: ticketsReducer,
  currencies: currencyReducer,
});

export default mainReducer;
