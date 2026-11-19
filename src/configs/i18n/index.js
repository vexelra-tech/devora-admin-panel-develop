// ** I18n Imports
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const getItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
const Lang = [
  { label: "En", code: "en" },
  { label: "Fa", code: "Fa" },
];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: getItem("lang") || "fa",
    backend: {
      loadPath: (lng) => Lang[lng],
    },
    debug: false,
    keySeparator: false,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    resources: {
      fa: {
        translation: {
          fa: "فارسی",
          en: "انگلیسی",
          registerOrLogin: "ورود / ثبت‌ نام",
          Congratulations: "تبریک می‌گویم 🎉",
          medalText: "شما مدال طلا برده‌اید.",
          viewSales: "مشاهده فروش‌ها",
          siteStatistics: "آمار سایت",
          users: "کاربران",
          courses: "دوره ها",
          teachers: "اساتید",
          comments: "کامنت ها",
          courseManagement: "مدیریت دوره ها",
          dashboard: "داشبورد",
          userManagement: "مدیریت کاربران",
          news: "اخبار و مقالات",
          schedualManagement: "مدیریت بازه زمانی",
          departmans: "دپارتمان ها",
          buildings: "ساختمان ها",
          messages: "پیام ها",
          overFifty: "بالای پنجاه درصد",
          underFifty: "زیر پنجاه درصد",
          ProfileCompletion: "درصد تکمیل پروفایل ( بالای 50 درصد)",
          courseStatus: "دوره ها بر اساس وضعیت",
          categorizingUsers: "دسته بندی کاربران بر اساس نقش",
          user: "کاربر",
          manager: "مدیر",
          teacher: "استاد",
          admin: "ادمین",
          regularUser: "کاربر عادی",
          technologyName: "نام تکنولوژی",
          numberOfUses: "تعداد دفعات استفاده",
          prev: "قبلی",
          next: "بعدی",
          inactiveUsers: "کاربران غیرفعال",
          activeUsers: "کاربران فعال",
          PercentageActiveUsers: "درصد کاربران فعال",
          usersActive: "کاربران فعال هستند",
          usersInactive: "کاربران غیرفعال هستند",

          // news and articles
          newsList: "لیست مقالات",
          allNews: "تعداد کل اخبار و مقالات",
          activeNews: "اخبار و مقالات فعال",
          inactiveNews: "اخبار و مقالات غیرفعال",
          createNewBlog: "ساخت مقاله جدید",
          searchBlogs: "عنوان مقاله...",

          // table data
          search: "جست و جو",
          show: "نمایش",
          title: "عنوان",
          lastUpdate: "آخرین آپدیت",
          category: "دسته بندی",
          status: "وضعیت",
          dataView: "مشاهده",
          dataRate: "امتیاز",
          action: "عملیات",
          active: "فعال",
          inactive: "غیرفعال",
          ViewDetails: "دیدن جزئیات",
          editDetail: "ویرایش جزئیات",
          wait: "لطفاً صبر کنید",
          editInfo: "ویرایش اطلاعات ",

          // sorting
          sort: "مرتب سازی بر اساس",
          view: "بیشترین بازدید",
          newest: "جدید ترین",
          oldest: "قدیمی ترین",
          rate: "بیشترین امتیاز",
          all: "همه",
        },
      },
      en: {
        translation: {
          fa: "Persian",
          en: "English",
          registerOrLogin: "Login / Register",
          Congratulations: "Congratulations 🎉",
          medalText: "You have won gold medal",
          viewSales: "View Sales",
          siteStatistics: "Site Statistics",
          users: "Users",
          courses: "Courses",
          teachers: "Teachers",
          comments: "Comments",
          courseManagement: "Course Management",
          dashboard: "Dashboard",
          userManagement: "User Management",
          news: "News and Articles",
          schedualManagement: "Schedual Management",
          departments: "Departments",
          buildings: "Buildings",
          messages: "Messages",
          overFifty: "Over fifty percent",
          underFifty: "Under fifty percent",
          ProfileCompletion: "Profile completion percentage (over 50%)",
          courseStatus: "Courses by status",
          categorizingUsers: "Categorizing users by role",
          user: "User",
          manager: "Manager",
          teacher: "Teacher",
          admin: "Admin",
          regularUser: "Regular User",
          technologyName: "Technology Name",
          numberOfUses: "Number of uses",
          prev: "Previous",
          next: "Next",
          inactiveUsers: "Inactive users",
          activeUsers: "Active users",
          PercentageActiveUsers: "Percentage of active users",
          usersActive: "Users are active",
          usersInactive: "Users are inactive",

          // news and articles
          newsList: "List of Articles",
          allNews: "Total number of news items and articles",
          activeNews: "Active News and Articles",
          inactiveNews: "Inactive News and Articles",
          createNewBlog: "Create a new Article",
          searchBlogs: "Article title...",

          // table data
          search: "Search",
          sort: "Sort by",
          show: "Show",
          title: "Title",
          lastUpdate: "Last update",
          category: "Category",
          status: "Status",
          dataView: "View",
          dataRate: "Rate",
          action: "Action",
          active: "Active",
          inactive: "Inactive",
          ViewDetails: "View details",
          editDetail: "Edit details",
          wait: "Please wait",
          editInfo: "Edit Information",

          // sorting
          view: "Most Viewed",
          newest: "Newset",
          oldest: "Oldest",
          rate: "Highest Score",
          all: "All",
        },
      },
    },
  });

export default i18n;
