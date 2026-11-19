// ** React Imports
import { Link } from "react-router-dom";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Third Party Components
import {
  CheckSquare,
  CreditCard,
  HelpCircle,
  Mail,
  MessageSquare,
  Power,
  Settings,
  User,
} from "react-feather";

// ** Reactstrap Imports
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { GetUserInfo } from "../../../../services/api/get/User";
import { useTranslation } from "react-i18next";

const UserDropdown = () => {
  const {t} = useTranslation()
  const { data: getUserInfo } = useQuery({
    queryKey: ["USER_INFO"],
    queryFn: GetUserInfo,
  });
  const userRole = JSON.parse(localStorage.getItem("user-role"));

  useEffect(() => {
    if (getUserInfo) {
      const userInfo = JSON.stringify(getUserInfo);
      localStorage.setItem("user-data", userInfo);
    }
  }, [getUserInfo]);

  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name fw-bold">
            {t(getUserInfo?.fName)} {t(getUserInfo?.lName)}
          </span>
          <span className="user-status">{userRole}</span>
        </div>
        <Avatar
          img={getUserInfo?.currentPictureAddress}
          imgHeight="40"
          imgWidth="40"
          status="online"
        />
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag={Link} to="/" onClick={(e) => e.preventDefault()}>
          <User size={14} className="me-75" />
          <span className="align-middle">{t("Profile")}</span>
        </DropdownItem>
        <DropdownItem tag={Link} to="/" onClick={(e) => e.preventDefault()}>
          <Mail size={14} className="me-75" />
          <span className="align-middle">{t("Inbox")}</span>
        </DropdownItem>
        <DropdownItem tag={Link} to="/" onClick={(e) => e.preventDefault()}>
          <CheckSquare size={14} className="me-75" />
          <span className="align-middle">{t("Tasks")}</span>
        </DropdownItem>
        <DropdownItem tag={Link} to="/" onClick={(e) => e.preventDefault()}>
          <MessageSquare size={14} className="me-75" />
          <span className="align-middle">{t("Chats")}</span>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem
          tag={Link}
          to="/pages/"
          onClick={(e) => e.preventDefault()}
        >
          <Settings size={14} className="me-75" />
          <span className="align-middle">{t("Settings")}</span>
        </DropdownItem>
        <DropdownItem tag={Link} to="/" onClick={(e) => e.preventDefault()}>
          <CreditCard size={14} className="me-75" />
          <span className="align-middle">{t("Pricing")}</span>
        </DropdownItem>
        <DropdownItem tag={Link} to="/" onClick={(e) => e.preventDefault()}>
          <HelpCircle size={14} className="me-75" />
          <span className="align-middle">{t("FAQ")}</span>
        </DropdownItem>
        <DropdownItem onClick={()=>localStorage.removeItem("token")}>
          <Power size={14} className="me-75" />
          <span className="align-middle">{t("Logout")}</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
