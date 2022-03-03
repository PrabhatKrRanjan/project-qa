import React, { useEffect, useState } from "react";
import NavComponent from "./NavComponent";
import SummaryDetails from "./SummaryDetails";
import RevenueDetails from "./RevenueDetails";
import ReachAndEngagementDetails from "./ReachAndEngagementDetails";
import AudienceDetails from "./AudienceDetails";
import DatePickerComponent from "./UI/DatePickerComponent";
import { Audio } from "react-loader-spinner";

const YoutubeStats = () => {
  const [statsData, setStatsData] = useState({});
  const [dateData, setDateData] = useState({ diffDays: 30 });
  const [toggleDatePicker, setToggleDatePicker] = useState(false);

  let url =
    "https://qorner-mock-server.herokuapp.com/stats?startDate=2021-01-01&endDate=2021-01-31";
  const fetchData = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStatsData(data);
      })
      .catch((error) => {
        console.log(error);
        alert("Unable to Fetch Data");
      });
  };
  const formatDate = (date) => {
    const dat = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate();
    const mon =
      date.getMonth() < 8 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

    return `${date.getFullYear()}-${mon}-${dat}`;
  };
  const getDates = (recivedDates) => {
    let diffDays = Math.abs(
      parseInt(recivedDates.endDate.getTime()) -
        parseInt(recivedDates.startDate.getTime())
    );
    diffDays = Math.floor(diffDays / (1000 * 60 * 60 * 24));
    recivedDates.diffDays = diffDays;
    setDateData(recivedDates);
    if (diffDays > 0) {
      const startDate = formatDate(recivedDates.startDate);
      const endDate = formatDate(recivedDates.endDate);
      url = `https://qorner-mock-server.herokuapp.com/stats?startDate=${startDate}&endDate=${endDate}`;
      fetchData();
    } else {
      alert("Plese select Valid Date");
      return;
    }
  };

  const showDatePicker = () => {
    if (toggleDatePicker) {
      setToggleDatePicker(false);
    } else {
      setToggleDatePicker(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      {statsData.metadata ? (
        <>
          <NavComponent metadata={statsData.metadata} />
          <SummaryDetails
            summary={statsData.summary}
            dateData={dateData}
            showDatePicker={showDatePicker}
          />
          {toggleDatePicker && <DatePickerComponent getDates={getDates} />}
          <RevenueDetails revenueDetails={statsData.revenueDetails} />
          <ReachAndEngagementDetails
            reachAndEngagementDetails={statsData.reachAndEngagementDetails}
          />
          <AudienceDetails audienceDetails={statsData.audienceDetails} />
        </>
      ) : (
        <div className="spinner">
          <Audio
            className="spinner"
            height="100"
            width="100"
            color="grey"
            ariaLabel="loading"
          />
        </div>
      )}
    </section>
  );
};

export default YoutubeStats;
