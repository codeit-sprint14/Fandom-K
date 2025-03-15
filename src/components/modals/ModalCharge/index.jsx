import { useEffect, useState } from "react";
import Credit01 from "../../../assets/images/img-credits-01.jpeg";
import Credit02 from "../../../assets/images/img-credits-02.jpeg";
import Credit03 from "../../../assets/images/img-credits-03.jpeg";
import CreditIcon from "../../../assets/icons/ic-credit.svg";
import ArrowIcon from "../../../assets/icons/ic-arrow.svg";

import * as S from "./style";
import ModalHeader from "../ModalHeader";

const QuantityList = ({ children, onClick, value }) => {
  const [e, i] = value;
  const creditImages = [Credit01, Credit02, Credit03];

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

  useEffect(() => {
    if (isExiting) {
      setTimeout(() => {
        onOpen(false);
      }, 400);
    }
  }, [isExiting, onOpen]);

  const handleClick = (e) => {
    const credit = window.localStorage.getItem("credit");
    const quantity = e.target.value;
    window.localStorage.setItem("credit", +credit + quantity);
    onClick(`${quantity.toLocaleString()} 크레딧을 충전했어요 🎉`);

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
          {[100, 500, 1000].map((e, i) => (
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
