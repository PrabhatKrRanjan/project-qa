import React from "react";
import Card from "./UI/Card";
import "./SummaryDetails.css";

const SummaryDetails = ({ summary, dateData, showDatePicker }) => {
  const { revenue, subscribers, views } = summary;
  const startDate = dateData.startDate
    ? dateData.startDate
    : new Date(2021, 0, 1);
  const endDate = dateData.endDate ? dateData.endDate : new Date(2021, 0, 31);
  const startMonth = startDate.toLocaleDateString(undefined, {
    month: "short",
  });
  const startDay = startDate.getDate();
  const endDay = endDate.getDate();
  const endYear = endDate.getFullYear();

  return (
    <div>
      <div className="summary-container">
        <div className="heading-details">
          <div className="hd-title">Summary</div>
          <div className="hd-sub-title">
            {startMonth} {startDay}- {endDay}, {endYear}
          </div>
        </div>
        <div className="picker-btn">
          <span className="btn-text" onClick={()=> showDatePicker()}>Last {dateData.diffDays} days</span>
          <img src="/images/CaretDown.svg" alt="" />
        </div>
      </div>
      <Card>
        <div className="summary-items">
          <div>
            <div className="summary-items_text">Subscribers</div>
            <div className="summary-items_figure">{subscribers}</div>
          </div>
          <div>
            <div className="summary-items_text">View</div>
            <div className="summary-items_figure">{views}</div>
          </div>
          <div>
            <div className="summary-items_text">Rev</div>
            <div className="summary-items_figure">{revenue}</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SummaryDetails;
