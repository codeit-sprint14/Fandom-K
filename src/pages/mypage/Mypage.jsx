import React, { useState } from "react";
import { useIdol } from "../../hooks/Mypage/useIdol.js";
import ListedProfiles from "./components/ListedProfiles/index.jsx";
import ProfileList from "./components/ProfileList";
import Btn from "../../components/buttons/Btn.jsx";
import CheckIcon from "../../assets/icons/ic-check.svg";
import * as S from "./Mypage.styles";
import {
  getStoredIdols,
  saveIdolsToStorage,
} from "../../utils/localStorage.js";

function Mypage() {
  // useIdol 훅 호출 (favoriteIdols 제거)
  const { idols, favoriteIdols, setFavoriteIdols, removeIdol, addIdol } =
    useIdol();

  // 선택된 아이돌 상태
  const [selectedIdols, setSelectedIdols] = useState([]);

  // 관심 아이돌이 아닌 목록만 ProfileList에 표시
  const availableIdols = idols.filter(
    (idol) => !favoriteIdols.some((fav) => fav.id === idol.id)
  );

  // 관심 아이돌 선택 & 해제
  const handleSelectIdol = (idol) => {
    setSelectedIdols((prev) =>
      prev.some((selected) => selected.id === idol.id)
        ? prev.filter((selected) => selected.id !== idol.id)
        : [...prev, idol]
    );
  };

  // 관심 아이돌 저장
  const handleSaveIdols = () => {
    if (selectedIdols.length === 0) {
      return;
    }

    selectedIdols.forEach((idol) => addIdol(idol));
    const updatedIdols = [...favoriteIdols, ...selectedIdols];
    saveIdolsToStorage(updatedIdols);
    setFavoriteIdols(updatedIdols);

    setSelectedIdols([]); // 선택 목록 초기화
  };

  // 관심 아이돌 삭제
  const handleRemoveIdol = (idolId) => {
    removeIdol(idolId);
  };

  return (
    <S.Container>
      <S.Section>
        <S.Title>내가 관심있는 아이돌</S.Title>
        <ListedProfiles idols={favoriteIdols} onRemove={handleRemoveIdol} />
      </S.Section>

      <S.Divider />

      <S.Section>
        <S.Title>관심 있는 아이돌을 추가해 보세요.</S.Title>
        <ProfileList
          idols={availableIdols} // favoriteIdols 제거, 전체 아이돌 목록 사용
          selectedIdols={selectedIdols}
          onSelect={handleSelectIdol}
        />
      </S.Section>

      <S.ButtonContainer>
        <Btn
          variant="primary"
          width="200px"
          text={
            <span>
              <img
                src={CheckIcon}
                alt="체크 아이콘"
                style={{ width: "20px", height: "20px" }}
              />
              저장하기
            </span>
          }
          onClick={handleSaveIdols}
        />
        {/* <button
          onClick={() => {
            handleSaveIdols();
          }}
        >
          저장하기
        </button> */}
      </S.ButtonContainer>
    </S.Container>
  );
}

export default Mypage;
