import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { MainReducer } from "../../store/mainReducer";
import classes from "./Currency.module.css";

import { setActiveCurrency } from "../../store/actionsCreater";

const Currency = () => {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state: MainReducer) => state.currencies.selectedCurrency
  );

  const clickCurrencyHandler = (text: string) => {
    dispatch(setActiveCurrency(text));
  };
  return (
    <div className={classes.container}>
      <span className={classes.container__text}>Валюта</span>
      <div className={classes.currency}>
        <div
          onClick={() => clickCurrencyHandler("RUB")}
          className={
            classes.currency__type +
            " " +
            (selectedCurrency === "RUB" ? classes.currency__type_active : "")
          }
        >
          RUB
        </div>
        <div
          onClick={() => clickCurrencyHandler("USD")}
          className={
            classes.currency__type +
            " " +
            (selectedCurrency === "USD" ? classes.currency__type_active : "")
          }
        >
          USD
        </div>
        <div
          onClick={() => clickCurrencyHandler("EUR")}
          className={
            classes.currency__type +
            " " +
            (selectedCurrency === "EUR" ? classes.currency__type_active : "")
          }
        >
          EUR
        </div>
      </div>
    </div>
  );
};

export default Currency;
