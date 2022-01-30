import classes from "./home-page.module.scss";
import Leaflet from "../../components/leaflet";

const HomePage = () => {
  return (
    <div className={classes.root}>
      <Leaflet />
    </div>
  );
};

export default HomePage;
