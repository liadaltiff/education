import classes from "./header.module.scss";

const Header = () => {
  return (
    <div className={classes.root}>
      <div className={classes.leftSide}>
        <button className={classes.buttonStyle} />
        <button className={classes.buttonStyle} />
        <button className={classes.buttonStyle} />
      </div>
    </div>
  );
};

export default Header;
