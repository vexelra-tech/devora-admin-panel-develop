// ** React Imports
import { Fragment, useState } from "react";

// ** Reactstrap Imports
import {
  Button,
  Col,
  FormFeedback,
  Input,
  InputGroup,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

// ** Third Party Components
import Cleave from "cleave.js/react";
import { Check, X } from "react-feather";
import { useForm } from "react-hook-form";

// ** Images
import amexCC from "@src/assets/images/icons/payments/amex-cc.png";
import dinersCC from "@src/assets/images/icons/payments/diners-cc.png";
import discoverCC from "@src/assets/images/icons/payments/discover-cc.png";
import jcbCC from "@src/assets/images/icons/payments/jcb-cc.png";
import maestroCC from "@src/assets/images/icons/payments/maestro-cc.png";
import mastercardCC from "@src/assets/images/icons/payments/mastercard-cc.png";
import uatpCC from "@src/assets/images/icons/payments/uatp-cc.png";
import visaCC from "@src/assets/images/icons/payments/visa-cc.png";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { NewsWithId } from "../../../services/api/get/NewsGetData";

const cardsObj = {
  jcb: jcbCC,
  uatp: uatpCC,
  visa: visaCC,
  amex: amexCC,
  diners: dinersCC,
  maestro: maestroCC,
  discover: discoverCC,
  mastercard: mastercardCC,
};

const defaultValues = {
  cardNumber: "",
};

const UpdateTechModal = ({ setShow, show, id }) => {
  const { t } = useTranslation();
  // ** States
  const [cardType, setCardType] = useState("");
  console.log(id, "iddddddddddd");

  // const {} = useMutation({
  //   mutationKey:[""],
  //   mutationFn:()=>
  // })
  const { data: newsDetail } = useQuery({
    queryKey: ["NEWS_WITH_ID"],
    queryFn: () => NewsWithId(id),
  });
  console.log(newsDetail?.detailsNewsDto, "newsDetail");

  // ** Hooks
  const {
    reset,
    control,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    if (data.cardNumber.length) {
      clearErrors();
    } else {
      setError("cardNumber", { type: "manual" });
    }
  };
  const detail = newsDetail?.detailsNewsDto;

  return (
    <Fragment>
      <Modal
        isOpen={show}
        toggle={() => setShow(!show)}
        className="modal-dialog-centered"
        onClosed={() => setCardType("")}
      >
        <ModalHeader
          className="bg-transparent"
          toggle={() => setShow(!show)}
        ></ModalHeader>
        <ModalBody className="px-sm-5 mx-50 pb-5">
          <h1 className="text-center mb-1">
            {t("editInfo")} {detail?.title}
          </h1>
          <Row
            tag="form"
            className="gy-1 gx-2 mt-75"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Col xs={12}>
              <Label
                className="form-label text-dark"
                style={{ fontSize: "16px" }}
                for="credit-card"
              >
                {t("title")}
              </Label>

              <InputGroup>
                <Input className="text-dark" placeholder={detail?.title} />
              </InputGroup>
              {errors.cardNumber && (
                <FormFeedback className="d-block">
                  Please enter valid card number
                </FormFeedback>
              )}
            </Col>
            <Col md={6}>
              <Label
                className="form-label text-dark"
                style={{ fontSize: "16px" }}
                for="card-name"
              >
                Name On Card
              </Label>
              <Input id="card-name" placeholder="John Doe" />
            </Col>
            <Col xs={6} md={3}>
              <Label
                className="form-label text-dark"
                style={{ fontSize: "16px" }}
                for="exp-date"
              >
                Exp. Date
              </Label>
              <Cleave
                id="exp-date"
                placeholder="MM/YY"
                className="form-control"
                options={{ delimiter: "/", blocks: [2, 2] }}
              />
            </Col>
            <Col xs={6} md={3}>
              <Label
                className="form-label text-dark"
                style={{ fontSize: "16px" }}
                for="cvv"
              >
                CVV
              </Label>
              <Cleave
                id="cvv"
                placeholder="654"
                className="form-control"
                options={{ blocks: [3] }}
              />
            </Col>
            <Col xs={12}>
              <div className="d-flex align-items-center">
                <div className="form-switch w-100">
                  <Input
                    defaultChecked
                    type="switch"
                    name="save-card"
                    id="save-card"
                  />
                  <Label
                    className="form-check-label text-dark"
                    style={{ fontSize: "16px" }}
                    for="save-card"
                  >
                    <span className="switch-icon-left">
                      <Check size={14} />
                    </span>
                    <span className="switch-icon-right">
                      <X size={14} />
                    </span>
                  </Label>
                  <Label
                    className="form-check-label fw-bolder ms-1 text-dark"
                    style={{ fontSize: "16px" }}
                    for="save-card"
                  >
                    Save Card for future billing?
                  </Label>
                </div>
              </div>
            </Col>
            <Col className="text-center mt-1" xs={12}>
              <Button type="submit" className="me-1" color="primary">
                Submit
              </Button>
              <Button
                color="secondary"
                outline
                onClick={() => {
                  setShow(!show);
                  reset();
                }}
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default UpdateTechModal;
