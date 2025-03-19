import { useEffect, useState } from "react";
import CreditIcon from "../../../assets/icons/ic-credit.svg";
import ArrowIcon from "../../../assets/icons/ic-arrow.svg";

import * as S from "./style";
import ModalHeader from "../ModalHeader";
import { MODAL_TYPES, useModal } from "../../../contexts/ModalContext";
import { useToast } from "../../../contexts/ToastContext";
import { useCredit } from "../../../contexts/CreditContext";

const QuantityList = ({ children, onClick, value }) => {
  const [e, i] = value;
  const creditImages = [
    "/images/img-credits-01.jpeg",
    "/images/img-credits-02.jpeg",
    "/images/img-credits-03.jpeg",
  ];

  return (
    <li onClick={onClick} value={e}>
      <img className="thumbnail" src={creditImages[i]} alt="" />
      <span style={{ flexGrow: 1 }} />
      <S.CreditIco>
        <img src={CreditIcon} />
      </S.CreditIco>
      {children}
      <img style={{ transform: "scaleX(-100%)" }} src={ArrowIcon} />
    </li>
  );
};

function ModalCharge({ onClick, onOpen }) {
  const [isExiting, setIsExiting] = useState(false);
  const { closeModal } = useModal();
  const { showToast } = useToast();
  const { credit, setCredit } = useCredit();

  useEffect(() => {
    if (isExiting) {
      setTimeout(() => {
        closeModal(MODAL_TYPES.CHARGE);
      }, 400);
    }
  }, [isExiting, onOpen]);

  const handleClick = (e) => {
    console.log("event: ", e);
    const quantity = Number(e.currentTarget.value);
    console.log("quan: ", quantity);
    setCredit((prevState) => Number(prevState) + quantity);
    showToast(`${quantity.toLocaleString()} 크레딧을 충전했어요 🎉`);

    setIsExiting(true);
  };

  return (
    <>
      <S.Container isExiting={isExiting}>
        <ModalHeader
          title={"크레딧 충전하기"}
          onClose={() => setIsExiting(true)}
        />
        <S.ModalChargeQuantity>
          {[1000, 3000, 10000].map((e, i) => (
            <QuantityList value={[e, i]} key={i} onClick={handleClick}>
              {`${e.toLocaleString()}개`}
            </QuantityList>
          ))}
        </S.ModalChargeQuantity>
      </S.Container>
      <S.Shade isExiting={isExiting} onClick={() => setIsExiting(true)} />
    </>
  );
}

export default ModalCharge;
