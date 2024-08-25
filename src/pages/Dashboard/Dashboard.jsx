import { useState, useEffect } from "react";

import Orders from "../../Components/orders/orders";
// import { cardsData } from '../../data';
import css from "./Dashboard.module.css";
// import Statstics from './Statstics/Statstics';
import apiClient from "../../api/apiClient";

const Dashboard = () => {
  const [cardsData, setCardsData] = useState([]);

  const getCardsDataFromApi = async () => {
    const updatedCardsData = await apiClient.getCardsData();

    if (updatedCardsData.length === 0 && cardsData.length > 0) {
      return;
    }

    setCardsData(updatedCardsData);
  };

  useEffect(() => {
    getCardsDataFromApi();
    const updateCardsDataIntervalId = setInterval(getCardsDataFromApi, 60_000);

    return () => {
      clearInterval(updateCardsDataIntervalId);
    };
  }, []);

  return (
    <div className={css.container}>
      {/* left pannel */}
      <div className={css.dashboard}>
        <div className={"${css.dashboardHead} theme-container"}>
          <div className={css.head}>
            {/* <div className={css.durationButton}></div> */}
            <span>CoE Mammography Dashboard</span>
          </div>
          <div className={css.cards}>
            {cardsData.map((card, index) => (
              <div className={css.card}>
                <div className={css.cardHead}>
                  <span>{card.title}</span>
                  <span>{card.change}</span>
                </div>
                <div className={css.cardAmount}>
                  <span>{card.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 
  <Orders/> */}
    </div>
  );
};

export default Dashboard;
