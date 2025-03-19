import { useEffect, useState } from "react";
import axios from "axios";

import ProfileIco from "../../profiles/ProfileIco";
import * as S from "./style";
import BtnX from "../../buttons/BtnX";
import Btn from "../../buttons/Btn";
import { MODAL_TYPES, useModal } from "../../../contexts/ModalContext";
import { useToast } from "../../../contexts/ToastContext";
import { useIdolData } from "../../../contexts/IdolContext";

function Skeletons() {
  return (
    <S.Skeleton>
      <div className="profile" />
      <div className="description" />
    </S.Skeleton>
  );
}

function getting(gender, datas) {
  const response = datas;
  const filtered = response?.filter((e) => e.gender === gender);
  console.log("받았음", filtered);
  return filtered;
}

async function vote(id) {
  try {
    const response = await axios.post(
      "https://fandom-k-api.vercel.app/14-3/votes",
      {
        idolId: id,
      }
    );
    console.log("성공:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "실패:",
      error.response ? error.response.data : error.message
    );
  }
}

function ModalVote({ onClick, onOpen }) {
  const [select, setSelect] = useState(0);
  const [data, setData] = useState(null);
  const [isExiting, setIsExiting] = useState(false);
  const [gender, setGender] = useState("female");
  const { closeModal } = useModal();
  const { showToast } = useToast();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { idolData } = useIdolData();

  useEffect(() => {
    if (isExiting) {
      setTimeout(() => {
        closeModal(MODAL_TYPES.VOTE);
      }, 400);
    }
  }, [isExiting, onOpen]);

  const handleClick = () => {
    vote(select);
    const credit = window.localStorage.getItem("credit");
    window.localStorage.setItem("credit", +credit - 1000);
    showToast(`투표했어요! 좋은 결과 나오길 바라요 💘`);

    setIsExiting(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = getting(gender, idolData);
      setData(result);
    };

    fetchData();
  }, [gender, idolData]);

  const QuantityList = ({ children, id, data, rank }) => {
    const handleCheck = (e) => {
      e.target.checked && setSelect(e.target.id);
    };

    return (
      <li>
        <input
          type="radio"
          name="a"
          id={id}
          value={id}
          checked={select == id}
          onChange={handleCheck}
        />
        <label htmlFor={id}>
          <S.ProfileContainer>
            <S.ProfileIcoContainer>
              <ProfileIco img={data.profilePicture} checked={select == id} />
            </S.ProfileIcoContainer>
            <S.Rank>{rank + 1}</S.Rank>
            <S.InfoContainer>
              <h3>{data.group}</h3>
              <h2>{children}</h2>
            </S.InfoContainer>
          </S.ProfileContainer>
          <span style={{ flexGrow: 1 }} />
          <S.Votes>{data.totalVotes}</S.Votes>
        </label>
      </li>
    );
  };

  return (
    <>
      <S.Container isExiting={isExiting}>
        <header>
          <div className="left">
            <S.SelectContainer
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="selected">
                {gender === "female"
                  ? "이달의 여자 아이돌"
                  : "이달의 남자 아이돌"}
              </div>
              {isDropdownOpen && (
                <S.SelectOptions>
                  <S.SelectOption onClick={() => setGender("female")}>
                    이달의 여자 아이돌
                  </S.SelectOption>
                  <S.SelectOption onClick={() => setGender("male")}>
                    이달의 남자 아이돌
                  </S.SelectOption>
                </S.SelectOptions>
              )}
            </S.SelectContainer>
            <span className="description">
              내 크래딧:{" "}
              <strong>
                {Number(window.localStorage.getItem("credit")).toLocaleString()}
              </strong>{" "}
            </span>
          </div>
          <BtnX clickHandler={() => setIsExiting(true)} />
        </header>
        <S.ModalChargeQuantity>
          <div className="edge" />
          {data
            ? data.map((e, i) => (
                <QuantityList
                  key={i}
                  id={e.id}
                  rank={i}
                  selected={select}
                  data={e}
                >
                  {e.name}
                </QuantityList>
              ))
            : Array(6)
                .fill(null)
                .map(() => <Skeletons />)}
        </S.ModalChargeQuantity>
        <Btn
          text={
            Number(window.localStorage.getItem("credit")) < 1000
              ? "크레딧이 부족해요"
              : "투표하기"
          }
          onClick={handleClick}
          disabled={Number(window.localStorage.getItem("credit")) < 1000}
        />
        <span className="description">
          투표에 <strong>1,000 크레딧</strong>을 사용해요
        </span>
      </S.Container>
      <S.Shade isExiting={isExiting} onClick={() => setIsExiting(true)} />
    </>
  );
}

export default ModalVote;
