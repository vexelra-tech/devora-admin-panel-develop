import { Suspense } from "react";

// ** Router Import
import { useTranslation } from "react-i18next";
import "../src/configs/i18n/index.js";
import Router from "./router/Router";

const App = () => {
  const { i18n } = useTranslation();
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );
};

export default App;
