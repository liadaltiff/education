import classes from "./home-page.module.scss";
import Leaflet from "../../components/leaflet/Leaflet";
import Sidebar from "../../components/sidebar/Sidebar";

const HomePage = () => {
  return (
    <div className={classes.root}>
      <div className={classes.gridComponents}>
        <Sidebar />
        <Leaflet />
      </div>
    </div>
  );
};

export default HomePage;
