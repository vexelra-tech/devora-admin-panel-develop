import {
  BookOpen,
  Briefcase,
  Circle,
  Clock,
  FileText,
  Globe,
  Home,
  MessageSquare,
  Send,
  User,
} from "react-feather";

export default [
  {
    id: "dashboard",
    title: "داشبورد",
    icon: <Home size={20} />,
    navLink: "/dashboard",
  },
  {
    id: "user-management",
    title: "مدیریت کاربران",
    icon: <User size={20} />,
    navLink: "/user-management",
  },
  {
    id: "course-management",
    title: "مدیریت دوره ها",
    icon: <BookOpen size={20} />,
    children: [
      {
        id: "courses-list",
        title: "لیست دوره ها",
        icon: <Circle size={12} />,
        navLink: "/courses/courses-list",
      },
      {
        id: "create-courses",
        title: "ساخت دوره ها",
        icon: <Circle size={12} />,
        navLink: "/courses/create-courses",
      },
      {
        id: "technologys",
        title: "تکنولوژی دوره ها",
        icon: <Circle size={12} />,
        navLink: "/courses/technology",
      },
      {
        id: "courses-status",
        title: "وضعیت دوره ها",
        icon: <Circle size={12} />,
        navLink: "/courses/courses-status",
      },
      {
        id: "courses-level",
        title: "سطح دوره ها",
        icon: <Circle size={12} />,
        navLink: "/courses/courses-level",
      },
      {
        id: "users-list",
        title: "لیست کاربران",
        icon: <Circle size={12} />,
        navLink: "/courses/users-list",
      },
      {
        id: "classes-list",
        title: "لیست کلاس ها",
        icon: <Circle size={12} />,
        navLink: "/courses/classes-list",
      },
      {
        id: "terms",
        title: "ترم ها",
        icon: <Circle size={12} />,
        navLink: "/courses/terms",
      },
      {
        id: "tasks",
        title: "تسک ها",
        icon: <Circle size={12} />,
        navLink: "/courses/tasks",
      },
    ],
  },
  {
    id: "news",
    title: "اخبار و مقالات",
    icon: <FileText size={20} />,
    children: [
      {
        id: "news-list",
        title: "لیست اخبار و مقالات",
        icon: <Circle size={12} />,
        navLink: "/news/news-list",
      },
      {
        id: "add-news",
        title: "افزودن اخبار و مقالات",
        icon: <Circle size={12} />,
        navLink: "/news/add-news",
      },
      {
        id: "news-category-management",
        title: "مدیریت دسته بندی اخبار ",
        icon: <Circle size={12} />,
        navLink: "/news/news-category-management",
      },
    ],
  },
  {
    id: "comments",
    title: "کامنت ها",
    icon: <Send size={20} />,
    navLink: "/comments",
  },
  {
    id: "schedualManagement",
    title: "مدیریت بازه زمانی",
    icon: <Clock size={20} />,
    children: [
      {
        id: "admin-schedual",
        title: "بازه زمانی ادمین",
        icon: <Circle size={12} />,
        navLink: "/schedual/admin",
      },
      {
        id: "user-schedual",
        title: "بازه زمانی کاربر",
        icon: <Circle size={12} />,
        navLink: "/schedual/user",
      },
    ],
  },
  {
    id: "departmans",
    title: "دپارتمان ها",
    icon: <Briefcase size={20} />,
    navLink: "/departmans",
  },
  {
    id: "buildings",
    title: "ساختمان ها",
    icon: <Globe size={20} />,
    navLink: "/buildings",
  },
  {
    id: "messages",
    title: "پیام ها",
    icon: <MessageSquare size={20} />,
    navLink: "/messages",
  },
];
