import React, { useState, useEffect } from "react";
import { useIdol } from "../../hooks/Mypage/useIdol.js";
import ListedProfiles from "./components/ListedProfiles/index.jsx";
import ProfileList from "./components/ProfileList";
import Btn from "../../components/buttons/Btn.jsx";
import CheckIcon from "../../assets/icons/ic-check.svg";
import Toast from "../../components/modals/Toast";
import * as S from "./Mypage.styles";
import { saveIdolsToStorage } from "../../utils/localStorage.js";
import Skeleton from "../mypage/components/Skeleton.jsx";

// 아이돌 배열 랜덤 섞기 함수
const shuffleArray = (array) => {
  return [...array]
    .map((idol) => ({ ...idol, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ sort, ...idol }) => idol); // sort 키 제거
};

function Mypage() {
  const {
    idols,
    favoriteIdols,
    setFavoriteIdols,
    removeIdol,
    addIdol,
    isLoading,
  } = useIdol();

  const [selectedIdols, setSelectedIdols] = useState([]);
  const [toastMsg, setToastMsg] = useState("");
  const [shuffledIdols, setShuffledIdols] = useState([]);

  // 관심 있는 아이돌 제외 후, 리스트를 랜덤하게 정렬
  useEffect(() => {
    const availableIdols = idols.filter(
      (idol) => !favoriteIdols.some((fav) => fav.id === idol.id)
    );

    setShuffledIdols(availableIdols);
  }, [idols, favoriteIdols]);

  useEffect(() => {
    if (toastMsg) {
      const timer = setTimeout(() => setToastMsg(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMsg]);

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
      setToastMsg("관심 아이돌을 선택해 주세요 🥲");
      return;
    }

    const updatedIdols = [...favoriteIdols, ...selectedIdols];
    saveIdolsToStorage(updatedIdols);
    setFavoriteIdols(updatedIdols);
    setSelectedIdols([]);

    setToastMsg("관심 아이돌을 수정했어요 ✨");
  };

  // 관심 아이돌 삭제
  const handleRemoveIdol = (idolId) => {
    removeIdol(idolId);
  };

  return (
    <S.Container>
      {toastMsg && <Toast msg={toastMsg} />}

      {/* 관심 있는 아이돌 */}
      <S.InterestSection>
        <S.Title>내가 관심있는 아이돌</S.Title>
        {isLoading ? (
          <>
            <Skeleton width="100%" height="80px" $borderRadius="10px" />
            <Skeleton
              width="90%"
              height="80px"
              $borderRadius="10px"
              style={{ marginTop: "10px" }}
            />
            <Skeleton
              width="85%"
              height="80px"
              $borderRadius="10px"
              style={{ marginTop: "10px " }}
            />
          </>
        ) : (
          <ListedProfiles idols={favoriteIdols} onRemove={handleRemoveIdol} />
        )}
      </S.InterestSection>

      <S.Divider />

      {/* 관심 있는 아이돌 추가 */}
      <S.AddInterestSection>
        <S.Title className="lists">관심 있는 아이돌을 추가해 보세요.</S.Title>
        {isLoading ? (
          <Skeleton width="100%" height="50px" borderRadius="10px" />
        ) : (
          <ProfileList
            idols={shuffledIdols}
            selectedIdols={selectedIdols}
            onSelect={handleSelectIdol}
          />
        )}
      </S.AddInterestSection>

      {/* 저장하기 버튼 */}
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
      </S.ButtonContainer>
    </S.Container>
  );
}

export default Mypage;
