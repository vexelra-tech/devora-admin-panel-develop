// ** React Imports
import { useEffect, useState } from "react";

// ** Third Party Components
import Chart from "react-apexcharts";
import { HelpCircle } from "react-feather";

// ** Reactstrap Imports
import { useTranslation } from "react-i18next";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const GoalOverview = ({ users, ...props }) => {
  const { t } = useTranslation();
  // ** State
  const [data, setData] = useState(null);

  const overFifty = users?.listUser?.filter(
    (value) => value.profileCompletionPercentage >= 50,
  ).length;
  const underFifty = users?.listUser?.filter(
    (value) => value.profileCompletionPercentage < 50,
  ).length;

  useEffect(() => {
    setData(overFifty);
  }, [setData, overFifty]);

  const options = {
      chart: {
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1,
        },
      },
      colors: ["#7367ef"],
      plotOptions: {
        radialBar: {
          offsetY: 10,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: "77%",
          },
          track: {
            background: "#ebe9f1",
            strokeWidth: "50%",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              color: "#7367ef",
              fontFamily: "Montserrat",
              fontSize: "2.86rem",
              fontWeight: "600",
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: [props.success],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      grid: {
        padding: {
          bottom: 30,
        },
      },
    },
    series = [overFifty * 10];

  return data !== null ? (
    <Card>
      <CardHeader>
        <CardTitle className="text-dark" tag="h4">
          {t("ProfileCompletion")}
        </CardTitle>
        <HelpCircle size={18} className="text-muted cursor-pointer" />
      </CardHeader>
      <CardBody className="p-0">
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height={350}
        />
      </CardBody>
      <Row className="border-top text-center mx-0">
        <Col xs="6" className="border-end py-1">
          <CardText className="text-dark mb-0">{t("overFifty")}</CardText>
          <h3 className="fw-bolder mb-0">{overFifty}</h3>
        </Col>
        <Col xs="6" className="py-1">
          <CardText className="text-dark mb-0">{t("underFifty")}</CardText>
          <h3 className="fw-bolder mb-0">{underFifty}</h3>
        </Col>
      </Row>
    </Card>
  ) : null;
};
export default GoalOverview;
