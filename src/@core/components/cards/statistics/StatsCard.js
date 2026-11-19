// ** Third Party Components
import classnames from "classnames";
import { BookOpen, Send, User, UserPlus } from "react-feather";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Reactstrap Imports
import { useQuery } from "@tanstack/react-query";
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
import { AllComments } from "../../../../services/api/get/CoursesGetData";
import { AllTeachers } from "../../../../services/api/get/User";

const StatsCard = ({ cols, users, getCourses, filter }) => {
  const { t } = useTranslation();
  const { data: getComments } = useQuery({
    queryKey: ["ALL_COMMENTS"],
    queryFn: () => AllComments(filter),
  });
  const { data: getTeachers } = useQuery({
    queryKey: ["TEACHERS"],
    queryFn: AllTeachers,
  });
  const data = [
    {
      title: users?.totalCount,
      subtitle: t("users"),
      color: "light-primary",
      icon: <User size={24} />,
    },
    {
      title: getCourses?.totalCount,
      subtitle: t("courses"),
      color: "light-info",
      icon: <BookOpen size={24} />,
    },
    {
      title: getTeachers?.length,
      subtitle: t("teachers"),
      color: "light-danger",
      icon: <UserPlus size={24} />,
    },
    {
      title: getComments?.totalCount,
      subtitle: t("comments"),
      color: "light-success",
      icon: <Send size={24} />,
    },
  ];

  const renderData = () => {
    return data.map((item, index) => {
      const colMargin = Object.keys(cols);
      const margin = index === 2 ? "sm" : colMargin[0];
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin}-0`]: index !== data.length - 1,
          })}
        >
          <div className="d-flex align-items-center">
            <Avatar color={item.color} icon={item.icon} className="me-2" />
            <div className="my-auto">
              <h4 className="fw-bolder mb-0">{item.title}</h4>
              <CardText
                style={{ fontSize: "16px", color: "#888" }}
                className="mb-0"
              >
                {item.subtitle}
              </CardText>
            </div>
          </div>
        </Col>
      );
    });
  };

  return (
    <Card className="card-statistics">
      <CardHeader>
        <CardTitle tag="h4" className="text-dark">
          {t("siteStatistics")}
        </CardTitle>
        <CardText className="card-text font-small-2 me-25 mb-0">
          Updated 1 day ago
        </CardText>
      </CardHeader>
      <CardBody className="statistics-body">
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  );
};

export default StatsCard;
