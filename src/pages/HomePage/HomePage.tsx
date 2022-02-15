import classes from "./home-page.module.scss";
import Leaflet from "../../components/leaflet/Leaflet";
import Sidebar from "../../components/sidebar/Sidebar";
import { useData } from "../../hooks/useData";
import { useEffect } from "react";
import originalJson from "../../../neighbourhoods.json";
import { Hood } from "../../types/neighbourhood.type";

const HomePage = () => {
  const { data, setData } = useData();

  useEffect(() => {
    // const newPlan = if (יש תוכנית) => originalJson + תוכנית

    setData(originalJson.features);
  }, []);

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
