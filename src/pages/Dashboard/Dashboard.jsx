import { useState, useEffect } from "react";

import css from "./Dashboard.module.css";
import apiClient from "../../api/apiClient";

const Dashboard = () => {
  const instituteName = "PGIMER Chandigarh";
  const [cardsData, setCardsData] = useState([]);
  const [malignantStudiesCurrentPageNumber, setMalignantStudiesCurrentPageNumber] = useState(1);
  const [malignantStudiesTotalPages, setMalignantStudiesTotalPages] = useState(-1);
  const [malignantStudies, setMalignantStudies] = useState([]);

  const exampleMalignantStudies = [
    {
      name: "Someone Someone",
      studyDate: "12-11-2024",
      viewerLink: "https://google.com",
    },
    {
      name: "Someone Someone",
      studyDate: "12-11-2024",
      viewerLink: "https://google.com",
    },
    {
      name: "Someone Someone",
      studyDate: "12-11-2024",
      viewerLink: "https://google.com",
    },
    {
      name: "Someone Someone",
      studyDate: "12-11-2024",
      viewerLink: "https://google.com",
    },
  ];

  const getCardsDataFromApi = async () => {
    console.log("making api request");

    const response = await apiClient.getCardsData();

    console.log("request ok");

    setCardsData([]);

    if (!(response?.cardsData?.length === 0 && cardsData.length > 0)) {
      console.log(`cardsData: ${response.cardsData.length}`);
      setCardsData(response.cardsData);
    }

    if (!(response?.StudyList?.length === 0 && malignantStudies.length > 0)) {
      console.log(`StudyList: ${response.StudyList.length}`);
      console.log(response.StudyList[0]);
      setMalignantStudies(response.StudyList);
    }
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
          <div className={css.title2}>
            {/* <div className={css.durationButton}></div> */}
            <span>CoE Mammography Dashboard - {instituteName}</span>
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

      <div className={css.dashboard}>
        <div className={"${css.dashboardHead} theme-container"}>
          <div className={css.headerContainer}>
            <span className={css.title2}>Malignant Patients</span>

            <div className={css.pageButtonsContainer}>
              <span className={css.title3}>Page 1 of 1</span>
              <div>
                <button className={css.pageButton} disabled={true}>
                  <span className={css.pageButtonText}>{"<"}</span>
                </button>
                <button className={css.pageButton} disabled={true}>
                  <span className={css.pageButtonText}>{">"}</span>
                </button>
              </div>
            </div>
          </div>

          <div className={css.rowsContainer}>
            {malignantStudies.map((study, index) => (
              <div className={css.rowCard} key={study.viewerLink}>
                <div className={css.cardHead}>
                  <span className={css.rowNameText}>{study.PatientName}</span>
                  <span className={css.rowDateText}>{`${study.StudyDate} ${study.StudyTime}`}</span>
                </div>

                <button
                  className={css.rowButton}
                  onClick={() =>
                    window.open(`http://localhost:8080/viewer?StudyInstanceUIDs=${study.StudyUID}`, "_blank")
                  }
                >
                  <span className={css.rowButtonText}>View</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
