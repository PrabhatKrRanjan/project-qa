import React from "react";
import Card from "./UI/Card";
import GraphComponentHeading from "./UI/GraphComponentHeading";
import Chart from "react-apexcharts";

const AudienceDetails = (props) => {
  const { audienceDetails } = props;
  const { viewsSubscriberVsNonSubscribersTrend } = audienceDetails;
  const { change, data, dataFieldMapping, value } =
    viewsSubscriberVsNonSubscribersTrend;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const series = [
    {
      name: dataFieldMapping.value1,
      data: data.map((item) => item.value1),
    },
    {
      name: dataFieldMapping.value2,
      data: data.map((item) => item.value2),
    },
  ];
  const options = {
    chart: {
      type: "line",
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      // type: "datetime",
      categories: data.map((item, i) => {
        if (i === 0) {
          const date = item.date.split("-");
          return `${months[parseInt(date[1]) - 1]} ${date[2]}`;
        } else if (i === data.length - 1) {
          const date = item.date.split("-");
          return `${months[parseInt(date[1]) - 1]} ${date[2]}`;
        }
        return "";
      }),
      labels: {
        rotate: 0,
        format: "dd/MM",
      },
    },
  };
  return (
    <div>
      <Card>
        <GraphComponentHeading value={value} change={change} />
        <Chart options={options} series={series} type="line" height={270} />
      </Card>
    </div>
  );
};

export default AudienceDetails;
