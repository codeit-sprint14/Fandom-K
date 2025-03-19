import { useState, useEffect, useCallback } from "react";
import { getStoredIdols, saveIdolsToStorage } from "../../utils/localStorage";
import { useIdolData } from "../../contexts/IdolContext";

export function useIdol() {
  // ✅ IdolContext 에서 idolData 와 별개로 favoriteIdols state 만 관리
  const [favoriteIdols, setFavoriteIdols] = useState(getStoredIdols());
  const { idolData } = useIdolData(); // ✅ IdolContext 에서 idolData 만 가져오기 (gettingIdols 는 불필요)

  // LocalStorage 변경 감지 후 상태 업데이트 (기존 코드 유지)
  useEffect(() => {
    setFavoriteIdols(getStoredIdols());
  }, [localStorage.getItem("favoriteIdols")]);

  // 관심 아이돌 추가 함수 (기존 코드 유지)
  const addIdol = (idol) => {
    const updated = [...favoriteIdols, idol];
    saveIdolsToStorage(updated);
    setFavoriteIdols(updated);
  };

  // 관심 아이돌 제거 함수 (기존 코드 유지)
  const removeIdol = (idolId) => {
    const updatedIdols = favoriteIdols.filter((idol) => idol.id !== idolId);
    setFavoriteIdols(updatedIdols);
    saveIdolsToStorage(updatedIdols);
  };

  return {
    // ✅ idols state 제거! IdolContext 의 idolData 를 직접 사용!
    idols: idolData, // 🌟 IdolContext 의 idolData 를 idols 로 반환!
    favoriteIdols,
    setFavoriteIdols,
    addIdol,
    removeIdol,
    isLoading: false,
    // setPage, hasMore, isLoading 제거! 페이지네이션 및 로딩 관리는 IdolContext 에서!
  };
}