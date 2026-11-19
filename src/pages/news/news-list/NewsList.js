import { Fragment, useEffect, useState } from "react";
import { Card, Col, Row } from "reactstrap";
// import DataTableServerSide from "../../../@core/components/tabel/data-tables/advance/DataTableServerSide";
import { useQuery } from "@tanstack/react-query";
import { Activity, Book, MinusCircle } from "react-feather";
import { useTranslation } from "react-i18next";
import StatsHorizontal from "../../../@core/components/widgets/stats/StatsHorizontal";
import { AllNews } from "../../../services/api/get/NewsGetData";
import NewsFiltering from "./NewsFiltering";

const NewsList = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState({
    SortingCol: "InsertData",
    SortType: "DESC",
    IsActive: true,
  });
  const [pageNumber, setPageNumber] = useState(1);
  const { data: allNews, refetch: refetchNews } = useQuery({
    queryKey: ["GET_ALL_NEWS"],
    queryFn: () => AllNews({ data: filter }),
  });
  useEffect(() => {
    if (filter) {
      // console.log(filter, "filter");
      refetchNews();
    }
    // if (rowsPerPage) {
    //   const updateRowsOfPage = setFilter((prev) => ({
    //     ...prev,
    //     RowsOfPage: rowsPerPage,
    //   }));
    //   if (updateRowsOfPage) {
    //     console.log(filter);
    //     refetchNews();
    //   }
    // }
  }, [refetchNews, setFilter, filter]);
  const activeNews = allNews?.news?.filter(
    (value) => value.active === true,
  ).length;
  const inactiveNews = allNews?.news?.filter(
    (value) => value.active === false,
  ).length;

  return (
    <Fragment>
      <Row>
        <Col
          xl="12"
          lg="6"
          sm="12"
          className="d-flex justify-content-between flex-nowrap"
        >
          <Col xl="3">
            <Card style={{ height: "90px" }}>
              <StatsHorizontal
                color="primary"
                icon={<Book />}
                stats={allNews?.totalCount}
                statTitle={t("allNews")}
                className={""}
              />
            </Card>
          </Col>
          <Col xl="3">
            <Card style={{ height: "90px" }}>
              <StatsHorizontal
                color="success"
                icon={<Activity />}
                stats={activeNews}
                statTitle={t("activeNews")}
              />
            </Card>
          </Col>
          <Col xl="3">
            <Card style={{ height: "90px" }}>
              <StatsHorizontal
                color="danger"
                icon={<MinusCircle />}
                stats={inactiveNews}
                statTitle={t("inactiveNews")}
              />
            </Card>
          </Col>
        </Col>
        <Col xl="12">
          <NewsFiltering data={allNews} setFilter={setFilter} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default NewsList;
