import React, { useState, useEffect, useRef } from "react";
import { useIdol } from "../../hooks/Mypage/useIdol.js";
import ListedProfiles from "./components/ListedProfiles/index.jsx";
import ProfileList from "./components/ProfileList";
import Btn from "../../components/buttons/Btn.jsx";
import CheckIcon from "../../assets/icons/ic-check.svg";
import Toast from "../../components/modals/Toast";
import * as S from "./Mypage.styles";
import {
  getStoredIdols,
  saveIdolsToStorage,
} from "../../utils/localStorage.js";
import Skeleton from "../mypage/components/Skeleton.jsx";

function Mypage() {
  // useIdol 훅 호출 (favoriteIdols 제거)
  const {
    idols,
    favoriteIdols,
    setFavoriteIdols,
    removeIdol,
    addIdol,
    setPage,
    hasMore,
    isLoading,
  } = useIdol();

  // 선택된 아이돌 상태
  const [selectedIdols, setSelectedIdols] = useState([]);

  // 토스트 메시지 상태 추가
  const [toastMsg, setToastMsg] = useState("");

  const observer = useRef(null);
  const lastElementRef = useRef(null);

  useEffect(() => {
    if (!hasMore) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [hasMore]);

  useEffect(() => {
    if (toastMsg) {
      const timer = setTimeout(() => setToastMsg(""), 3000);
      return () => clearTimeout(timer); // 메모리 누수 방지
    }
  }, [toastMsg]);

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
      setToastMsg("관심 아이돌을 선택해 주세요 🥲");
      return;
    }

    selectedIdols.forEach((idol) => addIdol(idol));
    const updatedIdols = [...favoriteIdols, ...selectedIdols];
    saveIdolsToStorage(updatedIdols);
    setFavoriteIdols(updatedIdols);

    setSelectedIdols([]); // 선택 목록 초기화

    setToastMsg("관심 아이돌을 수정했어요 ✨");
  };

  // 관심 아이돌 삭제
  const handleRemoveIdol = (idolId) => {
    removeIdol(idolId);
  };

  return (
    <S.Container>
      {toastMsg && <Toast msg={toastMsg} />}
      <S.Section>
        <S.Title>내가 관심있는 아이돌</S.Title>
        {isLoading ? (
          <>
            <Skeleton width="100%" height="80px" borderRadius="10px" />
            <Skeleton
              width="90%"
              height="80px"
              borderRadius="10px"
              style={{ marginTop: "10px" }}
            />
            <Skeleton
              width="85%"
              height="80px"
              borderRadius="10px"
              style={{ marginTop: "10px " }}
            />
          </>
        ) : (
          <ListedProfiles idols={favoriteIdols} onRemove={handleRemoveIdol} />
        )}
      </S.Section>

      <S.Divider />

      <S.Section>
        <S.Title>관심 있는 아이돌을 추가해 보세요.</S.Title>

        {isLoading ? (
          <Skeleton width="100%" height="50px" borderRadius="10px" />
        ) : (
          <ProfileList
            idols={availableIdols}
            selectedIdols={selectedIdols}
            onSelect={(idol) =>
              setSelectedIdols((prev) =>
                prev.some((selected) => selected.id === idol.id)
                  ? prev.filter((selected) => selected.id !== idol.id)
                  : [...prev, idol]
              )
            }
          />
        )}
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
      </S.ButtonContainer>
    </S.Container>
  );
}

export default Mypage;
