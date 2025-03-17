import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Toast from "../../modals/Toast";
import ModalCharge from "../../modals/ModalCharge";

import * as S from "./style";

import ModalVote from "../../modals/ModalVote";
import creditIcon from "../../../assets/icons/ic-credit.svg";
import logoIcon from "../../../assets/icons/logo.svg";
import profileIcon from "../../../assets/icons/ic-profile.svg";
import plusIcon from "../../../assets/icons/btn-plus.svg";

function GNB() {
  const [showToast, setShowToast] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [winSize, setWinSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWinSize = () => {
      setWinSize(window.innerWidth);
    };

    handleWinSize();

    window.addEventListener("resize", handleWinSize);

    return () => window.removeEventListener("resize", handleWinSize);
  }, []);

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

  if (winSize <= 768) {
    return (
      <>
        {showToast && <Toast msg={showToast} />}
        {modalOpen && (
          <ModalCharge onClick={handleToast} onOpen={handleModal} />
        )}

        <S.GNBContainer>
          <div className="container">
            <Link to="/list" className="center">
              <img src={logoIcon} alt="" srcSet="" />
            </Link>
            <div className="left" onClick={() => handleModal(true)}>
              <img src={creditIcon} alt="" srcSet="" />
              <span>
                {Number(window.localStorage.getItem("credit")).toLocaleString()}
              </span>
              <img src={plusIcon} alt="" srcSet="" className="ico-plus" />
            </div>
            <Link to="/mypage" className="right">
              <img src={profileIcon} alt="" />
            </Link>
          </div>
        </S.GNBContainer>
        <S.Ambient />
      </>
    );
  }

  return (
    <>
      {showToast && <Toast msg={showToast} />}
      {modalOpen && <ModalCharge onClick={handleToast} onOpen={handleModal} />}
      {/* {modalOpen && <ModalVote onOpen={handleModal} />} */}

      <S.GNBContainer>
        <div className="container">
          <div className="left" onClick={() => handleModal(true)}>
            <img src={creditIcon} alt="" srcSet="" />
            <span>
              {Number(window.localStorage.getItem("credit")).toLocaleString()}
            </span>
            <img src={plusIcon} alt="" srcSet="" className="ico-plus" />
          </div>
          <Link to="/list" className="center">
            <img src={logoIcon} alt="" srcSet="" />
          </Link>
          <Link to="/mypage" className="right">
            <img src={profileIcon} alt="" />
            {/* <div>
              <span className="group">NJZ</span>
              <span className="nickname">내 관심 아이돌</span>
            </div> */}
          </Link>
        </div>
        {/* <div className="group-img" /> */}
      </S.GNBContainer>
      <S.Ambient />
    </>
  );
}

export default GNB;
