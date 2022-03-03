import React from "react";
import "./GraphComponentHeading.css";

const GraphComponentHeading = (props) => {
  const {value, change} = props
  return (
    <div>
      <div className="graph-comp-title">Estimated Revenue</div>
      <div className="graph-comp-price">{value}</div>
      <div className="graph-comp-percent">
        <span>{change.percentage}</span>
        <img src="/images/fi-rs-info.svg" alt="I button" />
      </div>
    </div>
  );
};

export default GraphComponentHeading;
