import classes from "./NumberOfTransfers.module.css";

const NumberOfTransfers = () => {
  return (
    <div className={classes.container}>
      <span className={classes.container__text}>Количество пересадок</span>
      <div className={classes.transfers}>
        <div className={classes.numberOfTransfers}>
          <input
            id="all"
            className={classes.numberOfTransfers__checkbox}
            type="checkbox"
          ></input>
          <label htmlFor="all" className={classes.numberOfTransfers__text}>
            Все
          </label>
        </div>
        <div className={classes.numberOfTransfers}>
          <input
            id="without"
            className={classes.numberOfTransfers__checkbox}
            type="checkbox"
          ></input>
          <label htmlFor="without" className={classes.numberOfTransfers__text}>
            Без пересадок
          </label>
        </div>
        <div className={classes.numberOfTransfers}>
          <input
            id="one"
            className={classes.numberOfTransfers__checkbox}
            type="checkbox"
          ></input>
          <label htmlFor="one" className={classes.numberOfTransfers__text}>
            1 пересадка
          </label>
        </div>
        <div className={classes.numberOfTransfers}>
          <input
            id="two"
            className={classes.numberOfTransfers__checkbox}
            type="checkbox"
          ></input>
          <label htmlFor="two" className={classes.numberOfTransfers__text}>
            2 пересадки
          </label>
        </div>
        <div className={classes.numberOfTransfers}>
          <input
            id="three"
            className={classes.numberOfTransfers__checkbox}
            type="checkbox"
          ></input>
          <label htmlFor="three" className={classes.numberOfTransfers__text}>
            3 пересадки
          </label>
        </div>
      </div>
    </div>
  );
};

export default NumberOfTransfers;
