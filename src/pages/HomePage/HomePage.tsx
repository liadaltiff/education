import classes from "./home-page.module.scss";
import Leaflet from "../../components/leaflet/Leaflet";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

const HomePage = () => {
  return (
    <div className={classes.root}>
      {/* <Header /> */}
      <div className={classes.gridComponents}>
        <Sidebar />
        <Leaflet />
      </div>
    </div>
  );
};

export default HomePage;
