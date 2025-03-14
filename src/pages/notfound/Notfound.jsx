import styled from "styled-components";
import { useState } from "react";
// import axios from "axios";

import ProfileIco from "../../components/profiles/ProfileIco/index.jsx";
import Toast from "../../components/modals/Toast/index.jsx";
import Msg from "../../components/modals/Msg.jsx";
import ModalVote from "../../components/modals/ModalVote";

const Cover = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
`;

// async function posting() {
//   try {
//     // const response = await axios.post(
//     //   "https://fandom-k-api.vercel.app/14-3/idols",
//     //   {
//     //     profilePicture:
//     //       "https://static.news.zumst.com/images/2/2024/05/19/5a52326f793948a289b00184e8797f09.jpg",
//     //     group: "IVE",
//     //     gender: "female",
//     //     name: "장원영",
//     //   }
//     // );

//     const response = await axios.delete(
//       "https://fandom-k-api.vercel.app/14-3/idols/4764"
//     );

//     console.log("성공:", response.data);
//   } catch (error) {
//     console.error(
//       "실패:",
//       error.response ? error.response.data : error.message
//     );
//   }
// }

function NotFound() {
  const [showToast, setShowToast] = useState(0);
  const [showMsg, setShowMsg] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleToast = (msg) => {
    if (!showToast) {
      setShowToast(msg);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  const handleHover = (isHover) => {
    if (isHover != showMsg) {
      setShowMsg(!showMsg);
    }
  };

  const handleModal = (isOpen) => {
    setModalOpen(isOpen);
  };

  return (
    <>
      {showToast && <Toast msg={showToast} />}
      {modalOpen && <ModalVote onClick={handleToast} onOpen={handleModal} />}

      {/* 투표버튼 예제 */}
      <button
        isRight
        onClick={() => handleModal(true)}
        style={{ marginTop: "128px" }}
      >
        투표하기
      </button>
      {showMsg && (
        <>
          <br />
          <Msg msg="후원 목표를 달성했음" />
        </>
      )}

      {/* msg 예제 */}
      <Cover>
        <ProfileIco
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
          checked
        />
      </Cover>
    </>
  );
}

export default NotFound;
