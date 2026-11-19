// ** React Imports
import { Fragment, memo, useState } from "react";
import { Edit, Eye } from "react-feather";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Badge, Card, Spinner, Table } from "reactstrap";
import ImageFallback from "../../../image-fallback/ImageFallback";

const DataTableServerSide = ({
  setFilter,
  data,
  fallback,
  serverSideColumns,
}) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  return (
    <>
      <Fragment>
        <Card>
          <Table responsive>
            <thead>
              <tr>
                {serverSideColumns.map((value) => (
                  <th
                    className="text-dark"
                    style={{ width: "100px", fontSize: "16px" }}
                    key={value.id}
                  >
                    {value.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data ? (
                <>
                  {data?.map((value) => {
                    const formattedDate = value.insertDate
                      ? new Date(value.insertDate).toLocaleDateString("fa-IR")
                      : "";
                    return (
                      <tr key={value.id}>
                        <td
                          style={{ width: "150px" }}
                          className="d-flex bg-transparent gap-1"
                        >
                          <ImageFallback
                            src={value.currentImageAddress}
                            fallback={fallback}
                            className="me-75 rounded-circle"
                            style={{ width: "40px", height: "40px" }}
                          />
                          <div
                            style={{ width: "150px" }}
                            className="d-flex flex-wrap"
                          >
                            <p
                              style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                              className="text-primary mb-0"
                            >
                              {value.title}
                            </p>
                            <p
                              style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                margin: "0",
                              }}
                            >
                              {value.miniDescribe}
                            </p>
                          </div>
                        </td>
                        <td className="bg-transparent">
                          <p
                            style={{ fontSize: "15px" }}
                            className="mb-0 text-dark"
                          >
                            {formattedDate}
                          </p>
                        </td>
                        <td className="bg-transparent">
                          <p
                            style={{ fontSize: "15px" }}
                            className="mb-0 text-dark"
                          >
                            {value.newsCatregoryName}
                          </p>
                        </td>
                        <td className="bg-transparent">
                          <Badge
                            style={{
                              fontSize: "15px",
                              padding: "6px 18px",
                              borderRadius: "18px",
                            }}
                            color={
                              value.isActive ? "light-success" : "light-danger"
                            }
                            className={
                              value.isActive ? "text-success" : "text-danger"
                            }
                          >
                            {value.isActive ? t("active") : t("inactive")}
                          </Badge>
                        </td>
                        <td className="bg-transparent">
                          <p
                            style={{ fontSize: "15px" }}
                            className="mb-0 text-dark"
                          >
                            {value.currentView}
                          </p>
                        </td>
                        <td className="bg-transparent">
                          <p
                            style={{ fontSize: "15px" }}
                            className="mb-0 text-dark"
                          >
                            {value.newsRate?.count}
                          </p>
                        </td>
                        <td className="bg-transparent">
                          <Link
                            to={`/news/news-list/news-detail/${value.id}`}
                            className="text-dark"
                          >
                            <Eye className="me-50" size={15} />
                          </Link>
                          <Edit
                            className="me-50 text-dark cursor-pointer"
                            size={15}
                            onClick={() => {
                              setShow(true), setId(value.id);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <tr>
                  <td colSpan={7} className="bg-transparent">
                    <div
                      style={{
                        width: "140px",
                        height: "180px",
                        margin: "auto",
                        overflow: "hidden",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}
                    >
                      <Spinner
                        style={{
                          width: "100px",
                          height: "100px",
                          margin: "auto",
                        }}
                        className="bg-transparent"
                        color="primary"
                      />
                      <p
                        style={{ fontSize: "24px", margin: "0px 4px" }}
                        className="text-primary"
                      >
                        {t("wait")}
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card>
      </Fragment>
      {/* {show?
      <UpdateTechModal id={id} setShow={setShow} show={show} />:null
      } */}
    </>
  );
};

export default memo(DataTableServerSide);
