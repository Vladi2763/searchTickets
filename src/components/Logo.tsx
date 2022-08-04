import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <img
      className={classes.logo}
      src="/images/icon.svg"
      alt="logoCompany"
    ></img>
  );
};

export default Logo;
