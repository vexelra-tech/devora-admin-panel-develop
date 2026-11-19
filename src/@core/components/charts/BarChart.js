// ** Third Party Components

// ** Reactstrap Imports
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import { CoursesStatus } from "../../../services/api/get/CoursesGetData";

const BarChart = ({ success, getCourses, gridLineColor, labelColor }) => {
  const { t } = useTranslation();
  // ** Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    scales: {
      x: {
        grid: {
          color: gridLineColor,
          borderColor: gridLineColor,
        },
        ticks: { color: labelColor },
      },
      y: {
        min: 0,
        max: 400,
        grid: {
          color: gridLineColor,
          borderColor: gridLineColor,
        },
        ticks: {
          stepSize: 100,
          color: labelColor,
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  const { data: status } = useQuery({
    queryKey: ["STATUS"],
    queryFn: CoursesStatus,
  });

  // ** Chart data
  const data = {
    labels: status?.statusName,
    datasets: [
      {
        maxBarThickness: 15,
        backgroundColor: success,
        borderColor: "transparent",
        borderRadius: { topRight: 15, topLeft: 15 },
        data: [getCourses],
      },
    ],
  };

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
        <CardTitle className="text-dark" tag="h4">
          {t("courseStatus")}
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div style={{ height: "400px" }}>
          {/* <Bar data={data} options={options} height={400} /> */}
        </div>
      </CardBody>
    </Card>
  );
};

export default BarChart;
