import { ChevronLeft, ChevronRight } from "react-feather";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationIconsAndText = ({ pageNumber, pageNum, setPageNum }) => {
  const { i18n, t } = useTranslation();

  return (
    <Pagination className="d-flex pagination justify-content-center mt-1">
      <PaginationItem>
        {i18n.language === "fa" ? (
          <>
            {pageNum === 1 ? (
              <PaginationLink
                onClick={() => toast.error("صفحه دیگری وجود ندارد")}
                first
              >
                <ChevronLeft size={15} /> {t("prev")}
              </PaginationLink>
            ) : (
              <PaginationLink onClick={() => setPageNum(pageNum - 1)} first>
                <ChevronLeft size={15} /> {t("prev")}
              </PaginationLink>
            )}
          </>
        ) : (
          <>
            {pageNum === pageNumber ? (
              <PaginationLink
                onClick={() => toast.error("صفحه دیگری وجود ندارد")}
                first
              >
                <ChevronLeft size={15} /> {t("next")}
              </PaginationLink>
            ) : (
              <PaginationLink onClick={() => setPageNum(pageNum + 1)} first>
                <ChevronLeft size={15} /> {t("next")}
              </PaginationLink>
            )}
          </>
        )}
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className="bg-primary text-white">
          {pageNum}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        {i18n.language === "fa" ? (
          <>
            {pageNum === pageNumber ? (
              <PaginationLink
                onClick={() => toast.error("صفحه دیگری وجود ندارد")}
                first
              >
                {t("next")}
                <ChevronRight size={15} />
              </PaginationLink>
            ) : (
              <PaginationLink onClick={() => setPageNum(pageNum + 1)} first>
                {t("next")}
                <ChevronRight size={15} />
              </PaginationLink>
            )}
          </>
        ) : (
          <>
            {pageNum === 1 ? (
              <PaginationLink
                onClick={() => toast.error("صفحه دیگری وجود ندارد")}
                first
              >
                {t("prev")}
                <ChevronRight size={15} />
              </PaginationLink>
            ) : (
              <PaginationLink onClick={() => setPageNum(pageNum - 1)} first>
                {t("prev")}
                <ChevronRight size={15} />
              </PaginationLink>
            )}
          </>
        )}
      </PaginationItem>
    </Pagination>
  );
};
export default PaginationIconsAndText;
