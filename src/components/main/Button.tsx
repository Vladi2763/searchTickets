import { useSelector } from "react-redux";
import { InitialState } from "../../store/mainReducer";
import classes from "./Button.module.css";

const Button: React.FC<{ price: number }> = (props) => {
  let price;

  const selectedCurrency = useSelector(
    (state: InitialState) => state.selectedCurrency
  );
  const currencies = useSelector((state: InitialState) => state.currencies);
  if (selectedCurrency === "RUB") {
    price = `${props.price} ₽`;
  } else {
    const index = currencies.findIndex(
      (currency) => currency[0] === selectedCurrency
    );

    const rate = currencies[index][1].Value;
    const char =
      selectedCurrency === "USD"
        ? "$"
        : selectedCurrency === "EUR"
        ? "€"
        : currencies[index][0];

    price = `${(props.price / rate).toFixed(0)} ${char}`;
  }
  return (
    <button className={classes.button}>
      Купить<br></br> за {price}
    </button>
  );
};

export default Button;
