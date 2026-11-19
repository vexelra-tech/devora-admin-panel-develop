// ** Reactstrap Imports
import { Button, Card, CardBody, CardText } from "reactstrap";

// ** Images
import medal from "@src/@core/assets/images/illustration/badge.svg";
import { useTranslation } from "react-i18next";

const CardMedal = () => {
  const { t } = useTranslation();
  const userInfo = JSON.parse(localStorage.getItem("user-data"));
  return (
    <Card className="card-congratulations-medal">
      <CardBody dir="rtl">
        <h5 className="text-dark">
          {t("Congratulations")} {userInfo.fName} !
        </h5>
        <CardText style={{ fontSize: "14px" }} className="text-dark">
          {t("medalText")}
        </CardText>
        <img
          dir="ltr"
          className="congratulation-medal"
          src={medal}
          alt="Medal Pic"
        />
      </CardBody>
    </Card>
  );
};

export default CardMedal;
