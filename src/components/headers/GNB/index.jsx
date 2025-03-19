import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import * as S from "./style";

import creditIcon from "../../../assets/icons/ic-credit.svg";
import logoIcon from "../../../assets/icons/logo.svg";
import profileIcon from "../../../assets/icons/ic-profile.svg";
import plusIcon from "../../../assets/icons/btn-plus.svg";
import { useModal, MODAL_TYPES } from "../../../contexts/ModalContext";
import { useCredit } from "../../../contexts/CreditContext";

function GNB() {
  const { credit, setCredit } = useCredit();

  const { openModal } = useModal();

  useEffect(() => {
    const handleCredit = () => {
      setCredit(Number(window.localStorage.getItem("credit")));
    };

    handleCredit();
  }, []);

  return (
    <>
      <S.GNBContainer>
        <div className="container">
          <div className="left" onClick={() => openModal(MODAL_TYPES.CHARGE)}>
            <img src={creditIcon} alt="" srcSet="" />
            <span>{credit.toLocaleString()}</span>
            <img src={plusIcon} alt="" srcSet="" className="ico-plus" />
          </div>
          <Link to="/list" className="center">
            <img src={logoIcon} alt="" srcSet="" />
          </Link>
          <Link to="/mypage" className="right">
            <img src={profileIcon} alt="" />
          </Link>
        </div>
      </S.GNBContainer>
      <S.Ambient />
    </>
  );
}

export default GNB;
