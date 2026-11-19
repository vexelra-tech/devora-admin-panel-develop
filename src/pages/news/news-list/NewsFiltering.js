import { Fragment, useEffect, useState } from "react";
import { Search } from "react-feather";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
    Button,
    Card,
    CardHeader,
    CardTitle,
    Col,
    Input,
    InputGroup,
    InputGroupText,
    Label,
    Row,
} from "reactstrap";
import { useDebounce } from "use-debounce";
import PaginationIconsAndText from "../../../@core/components/pagination/PaginationIconsAndText";
import DataTableServerSide from "../../../@core/components/tabel/data-tables/advance/DataTableServerSide";
import fallback from "/src/assets/images/pages/blogs/BLOG-cartoon-illustration-vector.jpg";

const NewsFiltering = ({ setFilter, data }) => {
  const { t } = useTranslation();
  // ** rows of page
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handlePerPage = (e) => {
    setRowsPerPage(e.target.value);
  };

  useEffect(() => {
    if (rowsPerPage) {
      setFilter((prev) => ({ ...prev, RowsOfPage: rowsPerPage }));
    }
  }, [rowsPerPage, setFilter]);

  // ** page number
  const [pageNum, setPageNum] = useState(1);
  const pageNumber = Math.ceil(data?.totalCount / rowsPerPage);

  useEffect(() => {
    if (pageNum) {
      setFilter((prev) => ({ ...prev, PageNumber: pageNum }));
    }
  }, [setFilter, pageNum]);

  // ** query
  const [query, setQuery] = useState("");
  const [queryValue] = useDebounce(query, 2000);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    console.log(queryValue, "queryValue");
    if (queryValue) {
      setFilter((prev) => ({ ...prev, Query: queryValue }));
    }
    if (queryValue == "") {
      setFilter((prev) => ({ ...prev, Query: null }));
    }
  }, [queryValue, setFilter]);

  // ** handle data
  const [sortType, setSortType] = useState("");
  const [inputText, setInputText] = useState(undefined);

  const sortedData = data?.news?.sort((a, b) => {
    if (sortType === "newest") {
      return (
        new Date(b.updateDate || b.startDate) -
        new Date(a.updateDate || a.startDate)
      );
    }
    if (sortType === "oldest") {
      return (
        new Date(a.updateDate || a.startDate) -
        new Date(b.updateDate || b.startDate)
      );
    }
    if (sortType === "view") {
      return b.currentView - a.currentView;
    }
    if (sortType === "rate") {
      return b.newsRate?.count - a.newsRate?.count;
    }
  });

  // table header data

  const serverSideColumns = [
    { id: 1, name: t("title") },
    { id: 2, name: t("lastUpdate") },
    { id: 3, name: t("category") },
    { id: 4, name: t("status") },
    { id: 5, name: t("dataView") },
    { id: 6, name: t("dataRate") },
    { id: 7, name: t("action") },
  ];

  return (
    <Fragment>
      <Card style={{ minHeight: "390px" }}>
        <CardHeader className="border-bottom">
          <CardTitle
            style={{ fontSize: "20px" }}
            className="fw-bolder text-dark"
          >
            {t("newsList")}
          </CardTitle>
        </CardHeader>
        <Row className="mx-0 mt-1 mb-50">
          <Col sm="6" xl="7" className="d-flex gap-2">
            <Col xl="1">
              <div className="d-flex flex-wrap align-items-center">
                <Label className="fw-semibold w-12" for="sort-select">
                  {t("show")}
                </Label>
                <Input
                  className="dataTable-select"
                  type="select"
                  id="sort-select"
                  value={rowsPerPage}
                  onChange={(e) => handlePerPage(e)}
                >
                  <option value={4}>4</option>
                  <option value={8}>8</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                </Input>
              </div>
            </Col>
            <Col xl="2">
              <div className="d-flex flex-wrap align-items-center">
                <Label className="fw-semibold w-100" for="sort-select">
                  {t("sort")}
                </Label>
                <Input
                  className="dataTable-select border-accent w-100"
                  type="select"
                  id="sort-select"
                  value={inputText}
                  onChange={(e) => setSortType(e.target.value)}
                >
                  <option value={"newest"}>{t("newest")}</option>
                  <option value={"oldest"}>{t("oldest")}</option>
                  <option value={"rate"}>{t("rate")}</option>
                  <option value={"view"}>{t("view")}</option>
                </Input>
              </div>
            </Col>
            <Col xl="2">
              <Link to={"/news/add-news"}>
                <Button.Ripple
                  className="w-100 px-1 fw-medium mt-2"
                  color="primary"
                >
                  {t("createNewBlog")}
                </Button.Ripple>
              </Link>
            </Col>
          </Col>

          <Col
            className="d-flex flex-wrap align-items-center justify-content-end mt-sm-0 mt-1"
            sm="6"
            xl="5"
          >
            <Label className="me-1 fw-semibold w-12" for="search-input">
              {t("search")}
            </Label>
            <InputGroup color="primary" className="w-50">
              <InputGroupText>
                <Search size={14} />
              </InputGroupText>
              <Input
                className="w-50"
                value={query}
                onChange={(e) => handleSearch(e)}
                placeholder={t("searchBlogs")}
              />
            </InputGroup>
          </Col>
        </Row>
        <div className="react-dataTable">
          <DataTableServerSide
            data={sortedData}
            serverSideColumns={serverSideColumns}
            fallback={fallback}
          />
        </div>
        <Card>
          <PaginationIconsAndText
            pageNum={pageNum}
            pageNumber={pageNumber}
            setPageNum={setPageNum}
          />
        </Card>
      </Card>
    </Fragment>
  );
};

export default NewsFiltering;
