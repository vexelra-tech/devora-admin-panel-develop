// ** Third Party Components
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";

// ** Reactstrap Imports
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";

const Earnings = ({ success, activeUsers, inactiveUsers }) => {
  const { t } = useTranslation();
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: { show: false },
    labels: [t("activeUsers"), t("inActiveUsers")],
    stroke: { width: 0 },
    colors: [success],
    grid: {
      padding: {
        right: -20,
        bottom: -8,
        left: -20,
      },
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        donut: {
          labels: {
            show: true,
            name: {
              offsetY: 15,
            },
            value: {
              offsetY: -15,
              formatter(val) {
                return `${parseInt(val)} %`;
              },
            },
            total: {
              show: true,
              offsetY: 15,
              label: t("activeUsers"),
              formatter() {
                return `${activeUsers * 10}%`;
              },
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 1325,
        options: {
          chart: {
            height: 120,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 140,
          },
        },
      },
      {
        breakpoint: 1065,
        options: {
          chart: {
            height: 120,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 140,
          },
        },
      },
    ],
  };

  return (
    <Card className="earnings-card">
      <CardBody>
        <Row>
          <Col xs="6">
            <CardTitle className="mb-1 fs-xl text-dark">
              {t("PercentageActiveUsers")}
            </CardTitle>
            <h5 className="mb-1">{activeUsers * 10}%</h5>
            <CardText className="text-muted fs-lg">
              <span className="text-dark fw-lg"> {t("usersActive")}</span>
            </CardText>
            <h5 className="mb-1">{inactiveUsers * 10}%</h5>
            <CardText className="text-muted fs-lg">
              <span className="text-dark fw-medium"> {t("usersInactive")}</span>
            </CardText>
          </Col>
          <Col xs="6">
            <Chart
              options={options}
              series={[activeUsers * 10]}
              type="donut"
              height={195}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Earnings;
