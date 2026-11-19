// ** Third Party Components
import { useTranslation } from "react-i18next";

// ** Reactstrap Imports
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle
} from "reactstrap";

const PolarAreaChart = ({ users, ...props }) => {
  const { t } = useTranslation();
  // ** Props
  const {
    primary,
    greyColor,
    labelColor,
    yellowColor,
    infoColorShade,
    warningColorShade,
    successColorShade,
  } = props;

  const teachers = users?.listUser?.filter((value) =>
    value.roles?.includes("teacher"),
  ).length;
  const admin = users?.listUser?.filter((value) =>
    value.roles?.includes("admin"),
  ).length;
  const student = users?.listUser?.filter((value) =>
    value.roles?.includes("student"),
  ).length;
  const superAdmin = users?.listUser?.filter((value) =>
    value.roles?.includes("SuperAdmin"),
  ).length;
  const allUsers = users?.totalCount;

  // ** Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    layout: {
      padding: {
        top: -5,
        bottom: -45,
      },
    },
    scales: {
      r: {
        grid: { display: false },
        ticks: { display: false },
      },
    },
    plugins: {
      legend: {
        position: "right",
        labels: {
          padding: 25,
          boxWidth: 9,
          color: labelColor,
          usePointStyle: true,
        },
      },
    },
  };

  // ** Chart Data
  const data = {
    labels: [
      t("teacher"),
      t("admin"),
      t("user"),
      t("manager"),
      t("regularUser"),
    ],
    datasets: [
      {
        borderWidth: 0,
        label: "Population (millions)",
        data: [teachers, admin, student, superAdmin, allUsers],
        backgroundColor: [
          primary,
          yellowColor,
          warningColorShade,
          infoColorShade,
          greyColor,
          // successColorShade,
        ],
      },
    ],
  };

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
        <CardTitle className="text-dark" tag="h4">{t("categorizingUsers")}</CardTitle>
      </CardHeader>
      <CardBody>
        <div style={{ height: "350px" }}>
          {/* <PolarArea data={data} options={options} height={350} /> */}
        </div>
      </CardBody>
    </Card>
  );
};

export default PolarAreaChart;
