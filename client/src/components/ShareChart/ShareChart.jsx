import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ShareItem from "../ShareItem/ShareItem";
import { chartOptions } from "../../utils/chartOptions";

import "./ShareChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ShareChart() {
  const [chartValues, setChartValues] = useState([]);
  const [labels, setLabels] = useState([]);
  const shares = useSelector((state) => state.shares);
  const params = useParams();

  useEffect(() => {
    const prepChartArray = [];
    const prepLabelsArray = [];
    let indexOfElement = 1;

    shares.map((el) => {
      prepLabelsArray.push(indexOfElement++);
      return el.forEach((item) => {
        if (item.ticker === params.ticker) {
          prepChartArray.push(item.price);
        }
      });
    });

    setChartValues(prepChartArray);
    setLabels(prepLabelsArray);
  }, [shares]);

  const data = {
    labels,
    datasets: [
      {
        label: `${params.ticker}`,
        data: chartValues,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="share_chart">
      <Line options={chartOptions} data={data} />
      <ShareItem
        ticker={params.ticker}
        price={String(chartValues[chartValues.length - 1])}
      />
    </div>
  );
}
