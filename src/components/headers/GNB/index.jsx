import { Link } from "react-router-dom";
import { useState } from "react";
import Toast from "../../modals/Toast";
import ModalCharge from "../../modals/ModalCharge";

import * as S from "./style";

import creditIcon from "../../../assets/icons/ic-credit.svg";
import logoIcon from "../../../assets/icons/logo.svg";
import ModalVote from "../../modals/ModalVote";

function GNB() {
  const [showToast, setShowToast] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleToast = (msg) => {
    if (!showToast) {
      setShowToast(msg);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  const handleModal = (isOpen) => {
    setModalOpen(isOpen);
  };

  return (
    <>
      {showToast && <Toast msg={showToast} />}
      {/* {modalOpen && <ModalCharge onClick={handleToast} onOpen={handleModal} />} */}
      {modalOpen && <ModalVote onOpen={handleModal} />}

      <S.GNBContainer>
        <div className="container">
          <div className="left" onClick={() => handleModal(true)}>
            <img src={creditIcon} alt="" srcSet="" />
            <span>
              {Number(window.localStorage.getItem("credit")).toLocaleString()}
            </span>
          </div>
          <Link to="/list" className="center">
            <img src={logoIcon} alt="" srcSet="" />
          </Link>
          <Link to="/mypage" className="right">
            <div>
              <span className="group">NJZ</span>
              <span className="nickname">행복한 사자12</span>
            </div>
          </Link>
        </div>
        {/* <div className="group-img" /> */}
      </S.GNBContainer>
      <S.Ambient />
    </>
  );
}

export default GNB;
