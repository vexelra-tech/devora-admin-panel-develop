// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";
import HorizontalLayout from "@src/layouts/HorizontalLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Utils
import { isObjEmpty } from "@utils";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/dashboard";

const Home = lazy(() => import("../../pages/dashboard/Home"));
const NewsList = lazy(() => import("../../pages/news/news-list/NewsList"));
const Login = lazy(() => import("../../pages/auth/Login"));
const NewsDetail = lazy(() =>
  import("../../pages/news/news-detail/NewsDetail"),
);
const Error = lazy(() => import("../../pages/Error"));
const CreateNews = lazy(() =>
  import("../../pages/news/create-news/CreateNews"),
);

// ** Merge Routes
const Routes = [
  {
    path: "/",
    index: true,
    element: <Navigate replace to={DefaultRoute} />,
  },
  {
    path: "/dashboard",
    element: <Home />,
  },
  // {path:"/courses/courses-list",element:</>},
  // {path:"/courses/create-courses",element:</>},
  // {path:"/courses/technology",element:</>},
  // {path:"/courses/courses-status",element:</>},
  // {path:"/courses/courses-level",element:</>},
  // {path:"/courses/users-list",element:</>},
  // {path:"/courses/classes-list",element:</>},
  // {path:"/courses/terms",element:</>},
  // {path:"/courses/tasks",element:</>},
  // {path:"/user-management",elemetn:</>},
  {
    path: "/news/news-list",
    element: <NewsList />,
    meta: { layout: "vertical" },
  },
  { path: "/news/news-list/news-detail/:id", element: <NewsDetail /> },
  { path: "/news/add-news", element: <CreateNews /> },
  // {path:"/news/news-category-management",element:</>},
  //   {path:"/comments",elemetn:</>},
  // {path:"/schedual/admin",element:</>},
  // {path:"/schedual/user",element:</>},
  //   {path:"/departmans",element:</>},
  //   {path:"/buildings",elemetn:</>},
  //   {path:"/messages",element:</>},
  {
    path: "/login",
    element: <Login />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/error",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "*",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical";
  const layouts = ["vertical", "horizontal", "blank"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, getRoutes, Routes, TemplateTitle };
