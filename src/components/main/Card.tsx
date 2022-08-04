import classes from "./Card.module.css";
import Button from "./Button";
import { Ticket } from "../../store/mainReducer";

import changeDateFormat from "../../otherFunc/changeDateFormat";

const Card: React.FC<{ ticket: Ticket }> = (props) => {
  const timeDepartch = props.ticket.departure_time;
  const timeArrive = props.ticket.arrival_time;
  const cityDepartch = props.ticket.origin_name;
  const cityArrive = props.ticket.destination_name;
  const airportDepartch = props.ticket.origin;
  const airportArrive = props.ticket.destination;

  const fullDepartchDate = changeDateFormat(props.ticket.departure_date);
  const fullArriveDate = changeDateFormat(props.ticket.arrival_date);

  const numberOfTransfers = props.ticket.stops;
  let textTransfer = "";

  if (numberOfTransfers === 0) {
    textTransfer = "пересадок";
  } else if (numberOfTransfers === 1) {
    textTransfer = "пересадка";
  } else {
    textTransfer = "пересадки";
  }

  return (
    <div className={classes.card}>
      <div className={classes.button}>
        <img
          className={classes.button__image}
          src="/images/logo.svg"
          alt="logo"
        ></img>
        <Button price={props.ticket.price} />
      </div>
      <div className={classes.airInformation}>
        <div className={classes.timeContainer}>
          <span className={classes.timeContainer__time}>{timeDepartch}</span>
          <div className={classes.timeContainer__transfers}>
            <span className={classes.timeContainer__transfers_text}>
              {numberOfTransfers} {textTransfer}
            </span>
            <div className={classes.imgContainer}>
              <div className={classes.imgContainer_border}></div>
              <img
                className={classes.imgContainer__image}
                src="/images/airplane.svg"
              ></img>
            </div>
          </div>
          <span className={classes.timeContainer__time}>{timeArrive}</span>
        </div>
        <div className={classes.airDetail}>
          <div className={classes.airportDetail}>
            <span className={classes.airportDetail__airport}>
              {airportDepartch}, {cityDepartch}
            </span>
            <span className={classes.airportDetail__date}>
              {fullDepartchDate}
            </span>
          </div>
          <div className={classes.airportDetail}>
            <span className={classes.airportDetail__airport}>
              {cityArrive}, {airportArrive}
            </span>
            <span className={classes.airportDetail__date}>
              {fullArriveDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
