import classes from "./home-page.module.scss";
import Leaflet from "../../components/leaflet/Leaflet";
import Header from "../../components/header/Header";

const HomePage = () => {
  return (
    <div className={classes.root}>
      <Header />
      <Leaflet />
    </div>
  );
};

export default HomePage;
