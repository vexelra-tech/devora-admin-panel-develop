// ** React Imports
import { useEffect, useState } from "react";

// ** Custom Components
import TinyChartStats from "@components/widgets/stats/TinyChartStats";

const OrdersBarChart = ({ color, value }) => {
  // ** State
  const [data, setData] = useState(null);

  useEffect(() => {
    if (value) {
      setData(value);
    } else{
      setData(0)
    }
  }, [setData, value]);

  const options = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        top: -15,
        bottom: -15,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
        borderRadius: [0, 5],
        colors: {
          backgroundBarColors: [
            "#f3f3f3",
            "#f3f3f3",
            "#f3f3f3",
            "#f3f3f3",
            "#f3f3f3",
          ],
          backgroundBarRadius: 5,
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: [color],
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      x: {
        show: false,
      },
    },
  };
  const series = [value]
  console.log(series,"series")

  return data !== null ? (
    <TinyChartStats
      height={70}
      type="bar"
      options={options}
      title={"11"}
      stats={"222"}
      series={value}
    />
  ) : null;
};

export default OrdersBarChart;
