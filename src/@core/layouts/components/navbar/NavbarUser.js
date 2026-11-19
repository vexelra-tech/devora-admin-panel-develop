// ** Dropdowns Imports
import { useTranslation } from "react-i18next";
import UserDropdown from "./UserDropdown";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const NavbarUser = () => {
  const { t } = useTranslation();
  const token = localStorage.getItem("token");
  return (
    <ul className="nav navbar-nav align-items-center ms-auto">
      {token ? (
        <UserDropdown />
      ) : (
        <Button tag={Link} to={"/login"} color="primary" block>
          {t("registerOrLogin")}
        </Button>
      )}
    </ul>
  );
};
export default NavbarUser;
