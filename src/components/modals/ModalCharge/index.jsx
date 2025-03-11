import { useEffect, useState } from "react";

import * as S from "./style";

const QuantityList = ({ children, onClick, value }) => {
  return (
    <li onClick={onClick} value={value}>
      <span style={{ flexGrow: 1 }} />
      <S.CreditIco>
        <img src="src/assets/icons/ic-credit.svg" />
      </S.CreditIco>
      {children}
      <img
        style={{ transform: "scaleX(-100%)" }}
        src="src/assets/icons/ic-arrow.svg"
      />
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
    onClick(`${quantity} 크레딧을 충전했어요 🎉`);

    setIsExiting(true);
  };

  return (
    <>
      <S.Container isExiting={isExiting}>
        <header />
        <S.ModalChargeQuantity>
          {[100, 500, 1000].map((e, i) => (
            <QuantityList value={e} key={i} onClick={handleClick}>
              {e}
            </QuantityList>
          ))}
        </S.ModalChargeQuantity>
      </S.Container>
      <S.Shade isExiting={isExiting} onClick={() => setIsExiting(true)} />
    </>
  );
}

export default ModalCharge;
