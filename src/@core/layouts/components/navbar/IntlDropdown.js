// ** Third Party Components
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { useEffect } from "react";

// ** Reactstrap Imports

const IntlDropdown = () => {
  // ** Hooks
  const { t,i18n } = useTranslation();

  // ** Vars
  const langObj = {
    en: t("en"),
    fa: t("fa"),
  };

  // ** Function to switch Language
  const handleLangUpdate = (e, lang) => {
    e.preventDefault();
    i18n.changeLanguage(lang);
  };
  const changeLang = () => {
    const translate = i18n.language.startsWith("fa") ? "en" : "fa";
    console.log(translate, "translate");
    i18n.changeLanguage(translate);
    localStorage.setItem("lang", translate);
  };

  return (
    <div
      className="dropdown-language nav-item"
    >
      <DropdownToggle
        tag="a"
        className="nav-link"
        onClick={(e) => changeLang()}
      >
        <ReactCountryFlag
          svg
          className="country-flag flag-icon"
          countryCode={i18n.language === "en" ? "us" : "IR"}
        />
        <span className="selected-language">{langObj[i18n.language]}</span>
      </DropdownToggle>
      <DropdownMenu className="mt-0" end>
        <DropdownItem
          href="/"
          tag="a"
          onClick={(e) => handleLangUpdate(e, "en")}
        >
          <ReactCountryFlag className="country-flag" countryCode="us" />
          <span className="ms-1">{t("en")}</span>
        </DropdownItem>
        <DropdownItem
          href="/"
          tag="a"
          onClick={(e) => handleLangUpdate(e, "fa")}
        >
          <ReactCountryFlag className="country-flag" countryCode="IR" />
          <span className="ms-1">{t("fa")}</span>
        </DropdownItem>
      </DropdownMenu>
    </div>
  );
};

export default IntlDropdown;
