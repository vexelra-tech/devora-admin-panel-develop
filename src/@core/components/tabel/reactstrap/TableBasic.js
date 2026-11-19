// ** Icons Imports
import { useState } from "react";
import { useTranslation } from "react-i18next";

// ** Reactstrap Imports
import { Card, Table } from "reactstrap";

const TableBasic = ({ data, ...props }) => {
  const { i18n } = useTranslation();
  const [show, setShow] = useState(false);
  return (
    <>
      <Card className="w-full">
        <Table dir={i18n.language === "fa" ? "rtl" : "ltr"} responsive>
          <thead>
            <tr>
              {props.tableHeader.map((value) => (
                <th
                  className="text-dark"
                  style={{ fontSize: "16px" }}
                  key={value.label}
                >
                  {value.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((value) => (
              <tr key={value.techName}>
                <td className="bg-transparent">{value.techName}</td>
                <td className="bg-transparent">{value.countUsed}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default TableBasic;
