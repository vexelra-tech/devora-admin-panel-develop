import { ThemeColors } from "@src/utility/context/ThemeColors";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { UserCheck, UserX } from "react-feather";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import CardMedal from "../../@core/components/cards/advance/CardMedal";
import Earnings from "../../@core/components/cards/analytics/Earnings";
import GoalOverview from "../../@core/components/cards/analytics/GoalOverview";
import StatsCard from "../../@core/components/cards/statistics/StatsCard";
import BarChart from "../../@core/components/charts/BarChart";
import PolarAreaChart from "../../@core/components/charts/PolarAreaChart";
import PaginationIconsAndText from "../../@core/components/pagination/PaginationIconsAndText";
import TableBasic from "../../@core/components/tabel/reactstrap/TableBasic";
import StatsVertical from "../../@core/components/widgets/stats/StatsVertical";
import {
  AllCourses,
  DashboardTechology,
} from "../../services/api/get/CoursesGetData";
import { AllUsers } from "../../services/api/get/User";

const Home = () => {
  const { i18n, t } = useTranslation();
  const [pageNum, setPageNum] = useState(1);
  const [rowsOfPage, setRowsOfPage] = useState(4);

  const { colors } = useContext(ThemeColors);

  const [filter, setFilter] = useState({
    SortingCol: "DESC",
    RowsOfPage: 0,
    PageNumber: 0,
    SortType: "InsertDate",
  });

  const { data: getCourses } = useQuery({
    queryKey: ["ALL_CPURSES"],
    queryFn: () => AllCourses(filter),
  });

  const { data: users } = useQuery({
    queryKey: ["PROFILE_CMPLATED"],
    queryFn: () => AllUsers(filter),
  });

  const activeUsers = users?.listUser?.filter(
    (value) => value.active === true,
  ).length;
  const inactiveUsers = users?.listUser?.filter(
    (value) => value.active === false,
  ).length;

  const tableHeader = [
    { label: t("technologyName") },
    { label: t("numberOfUses") },
  ];

  const { data: techs } = useQuery({
    queryKey: ["DASHBOARD_CATEGORY"],
    queryFn: DashboardTechology,
  });

  const techPag = Math.ceil(techs?.length / 4);
  const techSlice = techs?.slice(
    (pageNum - 1) * rowsOfPage,
    pageNum * rowsOfPage,
  );

  return (
    <div dir={i18n.language === "fa" ? "rtl" : "ltr"} id="dashboard-ecommerce">
      <Row className="match-height">
        <Col xl="4" md="6" xs="12">
          <CardMedal />
        </Col>
        <Col xl="8" md="6" xs="12">
          <StatsCard
            filter={filter}
            getCourses={getCourses}
            users={users}
            cols={{ xl: "3", sm: "6" }}
          />
        </Col>
      </Row>
      <Row className="match-height">
        <Col xl="8" md="6" xs="12">
          <BarChart getCourses={getCourses} />
        </Col>
        <Col xl="4" md="6" xs="12">
          <GoalOverview users={users} />
        </Col>
      </Row>
      <Row className="match-height">
        <Col xl="5" lg="6" md="12">
          <Row className="match-height">
            <Col lg="6" md="3" xs="6">
              <StatsVertical
                icon={<UserCheck />}
                stats={activeUsers}
                statTitle={t("activeUsers")}
                color="success"
              />
            </Col>
            <Col lg="6" md="3" xs="6">
              <StatsVertical
                icon={<UserX />}
                stats={inactiveUsers}
                statTitle={t("inactiveUsers")}
                color="danger"
              />
            </Col>
            <Col lg="12" md="6" xs="12">
              <Earnings
                activeUsers={activeUsers}
                inactiveUsers={inactiveUsers}
                success={colors.success.main}
              />
            </Col>
          </Row>
        </Col>
        <Col xl="7" md="6" xs="12">
          <PolarAreaChart users={users} />
        </Col>
      </Row>
      <Row>
        <Col xl="12">
          <TableBasic tableHeader={tableHeader} data={techSlice} />
          <PaginationIconsAndText
            pageNum={pageNum}
            setPageNum={setPageNum}
            pageNumber={techPag}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
